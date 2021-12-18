const showAlert = () => {
  Swal.fire({
    title: "Unlocking on <br> <span style='color:#F9CEA9'>23rd Feb</span>",
    text: "",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'OK'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Thx for waiting',
        '',
        'success'
      )
    }
  })
}
const ChangeBackground = () => {
var element = document.body;
  element.classList.toggle("light-mode"); 
}
const showMsg = () => {
  Swal.fire({
    title: 'Pray for him to join <span style="color:#5865F2">Discord</span> 🙏',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Pray 🙏',
    denyButtonText: `Deny`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('<span style="color:#A4DC85">+1</span><br>Your pray has been counted.', '', 'success')
    } else if (result.isDenied) {
      Swal.fire("Your sins 're increasing 😡", '', 'info')
    }
  })
}