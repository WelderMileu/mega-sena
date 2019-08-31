(function(){
	
	const $    = (event) => document.querySelector(event);
 	let sort   = [23,45,67,20,92];
 	const list = [];	
 	const comp = [];
 	

	$("#btn").addEventListener("click", function(){
		const money   = $("#money").value;
		const tam 	  = $("#tam").value;
		const max 	  = $("#max").value;
		const min 	  = $("#min").value;
		let premia    = $("#premia");
		const premio  = $("#premio");
		const points  = $("#points");
		let sorteia   = $("#sorteia");
		const bolada  = $("#bolada"); 
		const content = $(".content");
		const convert = parseInt(money).toLocaleString('pt-br', {style:'currency',
																 currency:'BRL'});
		const grop = sort.concat(list);
		const sor = Math.random();

		const format = parseInt(sor.toFixed(2).replace("0.",""));

		if (tam == "" || max == "" || min == "" || money == "") {
			alert("Você procisa preencher todos os campos\npara continuar a operação");	
		}else{
			if (money > 0) {
				bolada.innerHTML = `${convert}`; 
			}

			if (list.length < tam) {

				// funcao para fazer um novo sorteio
				// nao esta funcionando corretamente

				for(var i=0; i < list.length; i++){ 
					if(format == list.indexOf(list[i])){
						console.log(`Numero ${list[i]} repetiu`)
					}
				}

				content.innerHTML += `<p class="result">${format}</p>`;
				list.push(format);
				console.log(list.length);

			}else{
				premia.innerHTML = sort.join("-");
				for(var i = 0; i < grop.length; i++){
					if(grop.indexOf(grop[i]) != i){
						comp.push(grop[i]);
					}
				}

				const dinheiro = parseInt(money) * (comp.length / sort.length) ;
				const total    = dinheiro.toLocaleString('pt-br',{style:'currency',currency:'BRL'}); 

				if (comp.length > 0) {
					sorteia.innerHTML = comp.join("-");
				}
				
				premio.innerHTML = total;
				points.innerHTML = comp.length;
				console.log(grop);
			}
		}
	});

})()