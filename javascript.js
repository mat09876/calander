var parent = document.querySelector('.wrap');
var list = [];
var data = [
 ];

var Item = function(conf) {
    this.ele = document.createElement('div');
    this.ele.className = 'app__months';
    this._data = conf.data;
    this.ele.innerHTML = this._data.month;
};

function initData(){
  for(var i = 0 ; i < 12 ; i++) {
    data.push({
      month: ('January','February','March','April','May','June','July','August','September','October','November','December'),
      value1: ('June'),
      // name: 'afasd'
    });
  }
}

 

function initList() {
  var i = 0, ln = data.length;
  var item;
  var frag = document.createDocumentFragment();
  for(; i < ln; i++) {
    item = new Item({
      data: data[i]
    });
    frag.appendChild(item.ele);

  }
  parent.appendChild(frag);
}

initData();
initList();
