String.prototype.localIDR = function() {
	return Number(this).
  	toLocaleString('id-ID', {
    	style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 2
    });
}


