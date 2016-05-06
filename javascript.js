var parent = document.querySelector('.wrap');

var data = [
 ];

var _MONTHS_ = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var _DAYS_ = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16',
              '17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];

var Item = function(conf) {
    this.ele = document.createElement('div');
    this.ele.className = 'app__months';
    this._data = conf.data;
    this.ele.innerHTML = this._data.month;
    // this.ele.innerHTML = this._data.days;
};

function initDaysForMonth(month, year) {
  return D
}

function initData(){
  for(var i = 0 ; i < 12 ; i++) {
    data.push({
      month: _MONTHS_[i],
      days: _DAYS_[i]
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
