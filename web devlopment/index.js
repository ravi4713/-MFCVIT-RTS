const getData = ()=>{
    var model = ["X3","X3 Pro","X5","X5 pro"]
    var price = [20000,25000,27500,29500]
    var ram = ['2 GB','4 GB','6 GB','6 GB']
    var sd = ['8 GB','12 GB', '12 GB', '16 GB']
    var cam = ["4 MP","8 MP", "16 MP", "32 MP"]

    var html = ``
    for (var i = 0; i < 2*(model.length)-1; i++) {
        if (i % 2 == 0){
            html += `<div class="row">
            <div class="col-2 text">
                <h2>${model[i / 2]}</h2> 
            </div>
            <div class="col-6 spec">
                <div class="row">
                    <div class="col feature">Price</div>
                    <div class="col amount">${price[i / 2]}</div>
                </div>
                <div class="row">
                    <div class="col feature">RAM</div>
                    <div class="col amount">${ram[i / 2]}</div>
                </div>
                <div class="row">
                    <div class="col feature">SD Card</div>
                    <div class="col amount">${sd[i / 2]}</div>
                </div>
                <div class="row">
                    <div class="col feature">Camera</div>
                    <div class="col amount">${cam[i / 2]}</div>
                </div>
            </div>
        </div>`;
        }
        else{
            html+=`<div class="row">
            <div class="col-2 text">
                 
            </div>
            <div class="col-6 spec increment">
                +${price[(i+1)/2]-price[(i-1)/2]}
            </div>
        </div>`
        }
  }
  var node = document.createTextNode(html)
  document.getElementById('appendClass').innerHTML=html;
}