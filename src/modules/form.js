const form = ()=>{
    return`
    <div class="alert alert-danger d-none">Nera sio adreso, veskite dar karta</div>
    <div class="form-group">
    <input type="text" class="form-control city" placeholder="Miestas">
    </div>
    <div class="form-group">
    <input type="text" class="form-control term" placeholder="Jusu adresas">
    </div>
    <div class="form-group">
      <input type="text" class="form-control result" readonly>
    </div>
    <div class="form-group">
       <button type="submit" class="btn btn-primary">Ieskoti</button>
    </div>
    `
}
export default form

