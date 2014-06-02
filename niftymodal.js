/**
 * niftyModal v0.0.1 - Modal window build with CSS3
 * different display modes
 * various effects
 */

;(function( $ ) {
  "use strict";
  
  var $b = $('body');
 
  var Plugin = function(options) {
    
  };
  
  var Modal = {
    $el: null,
    $content: null,
    $overlay: null,
    loading: false,
    
    load: function() {
      loading = true;
      this.$el && this._destroyEl();
      this._createEl();
    },
    
    /**
     * open a modal box
     * @param {object} options
     * @param {string} content
     * @returns {Modal}
     */
    open: function(options, content) {
      this.options = $.extend({}, $.fn.niftyModal.defaults, options);
      this.setContent(content);
      return this;
    },
    
    /**
     * update content of modal box
     * @param {string} content
     */
    setContent: function(content) {
      this.$content.html(content);
    },
    
    _createEl: function() {
      this.$el = $('<div>').addClass(this.options.classPrefix+'box');
      this.$content = $('<div>').addClass(this.options.classPrefix+'content').appendTo(this.$el);
      this.$overlay = $('<div>').addClass(this.options.classPrefix+'overlay');
      this.$overlay.appendTo($b);
      this.$el.appendTo($b);
    },
    
    _destroyEl: function() {
      this.$el.remove();
      this.$el = null;
      this.$overlay.remove();
      this.$overlay = null;
    }
  };
  
  $.fn.niftyModal = function(options) {
    if(this.length) {
      return this.each(function() {
        var p = new Plugin();
        p.init(options, this);
        $.data(this, 'niftyModal', p);
      });
    }
  };
  
  $.fn.niftyModal.Modal = Modal;
  
  $.fn.niftyModal.defaults = {
    classPrefix: 'modal-'
  };
 
}( jQuery ));
