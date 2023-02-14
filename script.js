function harga() {
  let nilai = document.getElementById('barang').value;
  let jumlah = document.getElementById('quantity').value;
  if (nilai == 'Americano Coffe') {
    hargaBarang = parseFloat(15000);
  } else if (nilai == 'Cappucino Coffe') {
    hargaBarang = parseFloat(20000);
  } else if (nilai == 'Avocado Coffe') {
    hargaBarang = parseFloat(25000);
  } else {
    hargaBarang = 0;
  }
  total = hargaBarang * jumlah;
  document.getElementById('outputHarga').value = hargaBarang;
  document.getElementById('total').value = total;
}

function buy() {
  let ftotal = parseInt(document.getElementById('total').value);
  let fbayar = parseInt(document.getElementById('bayar').value);
  let fkembalian = fbayar - ftotal;
  if (fkembalian < 0) {
    document.getElementById('kembalian').value = 'uang anda kurang';
  } else if (fkembalian == 0) {
    document.getElementById('kembalian').value = 'uang anda pas';
  } else {
    document.getElementById('kembalian').value = fkembalian;
  }
}
