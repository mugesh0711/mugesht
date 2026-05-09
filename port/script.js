// script.js

// Typing Effect
const words = ["Frontend Developer", "React Developer", "UI Designer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect(){

  currentWord = words[i];

  if(isDeleting){
    document.getElementById("typing").textContent =
      currentWord.substring(0, j--);
  }else{
    document.getElementById("typing").textContent =
      currentWord.substring(0, j++);
  }

  if(!isDeleting && j === currentWord.length){
    isDeleting = true;
    setTimeout(typeEffect,1000);
    return;
  }

  if(isDeleting && j === 0){
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// Reveal Animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(reveal => {

    const windowHeight = window.innerHeight;
    const top = reveal.getBoundingClientRect().top;

    if(top < windowHeight - 100){
      reveal.classList.add("active");
    }

  });
});


// Scroll Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {

  if(document.documentElement.scrollTop > 300){
    topBtn.style.display = "block";
  }else{
    topBtn.style.display = "none";
  }

};

topBtn.onclick = () => {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
};


// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {
  navLinks.classList.toggle("active");
};


// Particle Animation
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle{

  constructor(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3;
    this.speedX = (Math.random() - 0.5);
    this.speedY = (Math.random() - 0.5);
  }

  update(){
    this.x += this.speedX;
    this.y += this.speedY;
  }

  draw(){
    ctx.fillStyle = "#6B8F71";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles(){

  particlesArray = [];

  for(let i=0;i<100;i++){
    particlesArray.push(new Particle());
  }
}

function animateParticles(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  particlesArray.forEach(particle => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
})