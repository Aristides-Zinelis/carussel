import {carussel} from '../src/js/module';

describe('module', function() {

  // inject the HTML fixture for the tests
  beforeEach(function() {
    var fixture = "<div id='fixture'><div id='chevs-wrapper' class='chevs-wrapper'></div><div  class='container'><ul id='list' class='image-list'></ul><ul id='handlers' class='handler-wrapper'></ul></div></div>";
    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);


});

  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });


  it('addImage should add 1 image on DOM', function () {
    carussel.addImage('https://via.placeholder.com/300x200.png/09f/fff');
    var imageObjectList = document.getElementsByTagName("IMG");
      expect(imageObjectList.length).toEqual(1);
  });

  it('onInit should add 12 images on DOM', function () {
    carussel.onInit();
    var imageObjectList = document.getElementsByTagName("IMG");
      expect(imageObjectList.length).toEqual(12);
  });

  it('addHandlers should add 4 carussel handlers on DOM', function () {
    carussel.addHandlers();
    var handlerList = document.querySelectorAll(".handler-wrapper li a");
      expect(handlerList.length).toEqual(4);
  });


  it("first handler should be active", function(){
    carussel.addHandlers();
    var handlerList = document.querySelectorAll(".handler-wrapper li a");
    var className = handlerList[0].classList.contains("active");
      expect(className).toBe(true);
  });

  it("first handler should call goToSlide with 0", function(){
    carussel.addHandlers();
      spyOn(carussel, 'goToSlide');
      var handlerList = document.querySelectorAll(".handler-wrapper li a");
      handlerList[0].click();
      expect(carussel.goToSlide).toHaveBeenCalledWith(0);

  });

  it("addChevrons should should add 2 chevron handlers on DOM", function(){
      carussel.addChevrons();
      var handlerList = document.querySelectorAll(".fa");
      expect(handlerList.length).toEqual(2);
    });

    it("second handler should call goToSlide with 1", function(){
      carussel.addHandlers();
        spyOn(carussel, 'goToSlide');
        var handlerList = document.querySelectorAll(".handler-wrapper li a");
        handlerList[1].click();
        expect(carussel.goToSlide).toHaveBeenCalledWith(1);

    });

  it("chevron right should call goToSlide", function(){
      carussel.addChevrons();
        spyOn(carussel, 'nextSlide');
        var handler = document.getElementById("right").click();
        expect(carussel.nextSlide).toHaveBeenCalled();
    });

    it("nextSlide with 'left' should call goToSlide with 3", function(){
          spyOn(carussel, 'goToSlide');
          var event = {};
          event.target = {};
          event.target.id="left";
          carussel.nextSlide(event);
          expect(carussel.goToSlide).toHaveBeenCalledWith(3);
      });








});
