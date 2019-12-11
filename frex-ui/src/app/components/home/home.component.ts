import { Component, OnInit, Output, EventEmitter} from "@angular/core";
import * as $ from 'jquery';
import Typed from 'typed.js';
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  message:number=0;
  @Output() messageEvent=new EventEmitter<number>();

  constructor(private router: Router) {}
  
  loginpopup() {
    this.router.navigate(["/login"]);
  }

  open() {
    this.router.navigate(["/register"]);
  }


  sendMessage(){
    this.messageEvent.emit(this.message);
  }

  ngOnInit() {
    this.getData();
    this.sendMessage();


    $(".jogger").click(function() {
      $('html, body').animate({
          scrollTop: $(".jogger_content1").offset().top-50
      }, 1000);
    });
    $(".photography").click(function() {
      $('html, body').animate({
          scrollTop: $(".photography_content").offset().top-50
      }, 1000);
    });
    $(".volunteer").click(function() {
      $('html, body').animate({
          scrollTop: $(".volunteer_content").offset().top-50
      }, 1000);
    });
    $(".environment").click(function() {
      $('html, body').animate({
          scrollTop: $(".environment_content").offset().top-50
      }, 1000);
    });

    var typed = new Typed(".typed-strings", {
      strings: ["Welcome to FReX", "Building a community in"],
      typeSpeed: 60,
      showCursor: false,
      smartBackspace: true // Default value
    });

    var typed1 = new Typed(".typed-strings1", {
      strings: ["Fitness", "Photography","Volunteering","Environment"],
      typeSpeed: 60,
      loop: true,
      startDelay: 2000,
      showCursor: false,
      smartBackspace: true,
       // Default value
    });

    
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    
 
    // If element is scrolled into view, fade it in
    $(window).scroll(function() {

      $('#footer').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).css({"opacity":"100%"});
        }        
      });
      $('#footer').each(function() {
        if (isScrolledIntoView(this) === false) {
          $(this).css({"opacity":"0%"});
        }        
      });

      $('.animation_one').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).css({"opacity":"100%"});
          $(this).addClass('fadeInLeft');
        }        
      });
      
      $('.animation_two').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).css({"opacity":"100%"});
          $(this).addClass('fadeInRight');
        }
      });
      $('.animation_three').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).css({"opacity":"100%"});
          $(this).addClass('fadeInLeft');
        }
      });
      $('.animation_four').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).css({"opacity":"100%"});
          $(this).addClass('fadeInRight');
        }
      });
    });

  }
  ngAfterViewInit() {    


  }

  getData() {
  }
}