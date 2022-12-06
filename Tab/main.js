let tab = function(){
  let tabNav = document.querySelectorAll('.tabs-nav__item'),
  tabContent = document.querySelectorAll('.tab'),
  tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
  });

  function selectTabNav(){
    tabNav.forEach(item =>{
      item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);

  }
  function selectTabContent(tabName){
    tabContent.forEach(item =>{
      item.classList.contains(tabName) ? item.classList.add('is-active'): item.classList.remove('is-active');
    })
  }

};
tab();

function start(){
  document.querySelector("#two").onclick = function(){
  document.querySelector("#two").classList.add("vis");
  show();
}
document.querySelector("#three").onclick = function(){
document.querySelector("#three").classList.add("vis");
show();
}
document.querySelector("#foor").onclick = function(){
document.querySelector("#foor").classList.add("vis");
show();

}
document.querySelector("#five").onclick = function(){
document.querySelector("#five").classList.add("vis");
show();

}


function show() {
  if (document.querySelector("#two").classList.contains("vis") ===
  document.querySelector("#three").classList.contains("vis")) {
    if (document.querySelector("#two").classList.contains("vis") ===
    document.querySelector("#foor").classList.contains("vis")){
      if (document.querySelector("#three").classList.contains("vis") ===
      document.querySelector("#foor").classList.contains("vis")){
        if (document.querySelector("#five").classList.contains("vis") ===
        document.querySelector("#two").classList.contains("vis")){
          if (document.querySelector("#five").classList.contains("vis") ===
          document.querySelector("#three").classList.contains("vis")){
            if (document.querySelector("#five").classList.contains("vis") ===
            document.querySelector("#foor").classList.contains("vis")){
              document.getElementById('one').removeAttribute('disabled');
            }
          }
        }
      }
    }


  }

}
};
start();
