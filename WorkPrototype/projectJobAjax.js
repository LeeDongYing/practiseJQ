const stageAjax =(type)=>{
    $("#stage0").empty();
    let stage=''
    $.ajax({
        url : "http://127.0.0.1:5500/Homework/WorkPrototype/stage.json",
        success:  (data) => {
            $('#stage0').append('<option value="0">請選擇</option>')
            if('A' === type){
                stage = data.A
                $.each(stage,(k,v)=>{
                    $('#stage0').append('<option value="'+'A'+(k+1)+'">'+v+'</option>')
                })
            }else if('B' === type){
                stage = data.B
                    $('#stage0').append('<option value="B1">'+stage+'</option>')
            }else if('C' === type){
                stage = data.C
                    $('#stage0').append('<option value="C1">'+stage+'</option>')
            }else if('D' == type){
                stage = data.D
                $.each(stage,(k,v)=>{
                    $('#stage0').append('<option value="'+'D'+(k+1)+'">'+v+'</option>')
                })
            }else if('E' == type){
                stage = data.E
                    $('#stage0').append('<option value="E1">'+stage+'</option>')
            }
        }
    })
}
const jobAjax = (type)=>{
    $(x).empty();
    let item=''
    $.ajax({
        url : 'http://127.0.0.1:5500/Homework/WorkPrototype/job.json',
        success:  (data) => {
                $(x).append('<option value="0">請選擇</option>')
                if('A1'==type){
                    item = data.A1
                    $.each(item,(k,v)=>{
                        $(x).append('<option value="'+'A1'+(k+1)+'">'+v+'</option>')
                    })
                }else if('A2'==type){
                    item = data.A2
                    $.each(item,(k,v)=>{
                        $(x).append('<option value="'+'A2'+(k+1)+'">'+v+'</option>')
                    })
                }else if('B1'==type){
                    item = data.B1
                    $.each(item,(k,v)=>{
                        $(x).append('<option value="'+'B1'+(k+1)+'">'+v+'</option>')
                    })
                }else if('C1'==type){
                    item = data.C1
                    $.each(item,(k,v)=>{
                        $(x).append('<option value="'+'C1'+(k+1)+'">'+v+'</option>')
                    })
                }else if('D1'==type){
                    item = data.D1
                    $(x).append('<option value="D1">'+item+'</option>')
                }else if('D2'==type){
                    item = data.D2
                    $(x).append('<option value="D2">'+item+'</option>')
                }else if('D3'==type){
                    item = data.D3
                    $(x).append('<option value="D3">'+item+'</option>')
                }else if('D4'==type){
                    item = data.D1
                    $(x).append('<option value="D4">'+item+'</option>')
                }else if('D5'==type){
                    item = data.D5
                    $(x).append('<option value="D5">'+item+'</option>')
                }else if('D6'==type){
                    item = data.D6
                    $(x).append('<option value="D6">'+item+'</option>')
                }else if('D7'==type){
                    item = data.D7
                    $(x).append('<option value="D7">'+item+'</option>')
                }else if('D8'==type){
                    item = data.D8
                    $(x).append('<option value="D8">'+item+'</option>')
                }else if('D9'==type){
                    item = data.D9
                    $(x).append('<option value="D9">'+item+'</option>')
                }else if('E1'==type){
                    item = data.E1
                    $(x).append('<option value="E1">'+item+'</option>')
                }
        }
    })
} 