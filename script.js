let cart = 0;

        function addToCart(nome, preco) {
            cart++;
            document.getElementById('cart-count').innerText = cart;
            alert(nome + " foi adicionado ao carrinho!");
        }