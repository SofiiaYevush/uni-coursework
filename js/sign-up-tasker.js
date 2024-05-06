document.getElementById('years').addEventListener('change', function() {
    this.style.setProperty('--placeholder', "'" + this.value + "'");
  });
  