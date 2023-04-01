const estados = [
    // { sigla: 'AC', nome: 'Acre' },
    // { sigla: 'AL', nome: 'Alagoas' },
    // { sigla: 'AP', nome: 'Amapá' },
    // { sigla: 'AM', nome: 'Amazonas' },
    // { sigla: 'BA', nome: 'Bahia' },
    // { sigla: 'CE', nome: 'Ceará' },
    // { sigla: 'DF', nome: 'Distrito Federal' },
    // { sigla: 'ES', nome: 'Espírito Santo' },
    // { sigla: 'GO', nome: 'Goiás' },
    // { sigla: 'MA', nome: 'Maranhão' },
    // { sigla: 'MT', nome: 'Mato Grosso' },
    // { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    // { sigla: 'MG', nome: 'Minas Gerais' },
    // { sigla: 'PA', nome: 'Pará' },
    // { sigla: 'PB', nome: 'Paraíba' },
    // { sigla: 'PR', nome: 'Paraná' },
    // { sigla: 'PE', nome: 'Pernambuco' },
    // { sigla: 'PI', nome: 'Piauí' },
    // { sigla: 'RJ', nome: 'Rio de Janeiro' },
    // { sigla: 'RN', nome: 'Rio Grande do Norte' },
    // { sigla: 'RS', nome: 'Rio Grande do Sul' },
    // { sigla: 'RO', nome: 'Rondônia' },
    // { sigla: 'RR', nome: 'Roraima' },
    // { sigla: 'SC', nome: 'Santa Catarina' },
     { sigla: 'SP', nome: 'São Paulo' },
    // { sigla: 'SE', nome: 'Sergipe' },
    // { sigla: 'TO', nome: 'Tocantins' }
  ];
  
  const cidades = {
    // 'AC': ['Rio Branco'],
    // 'AL': ['Maceió'],
    // 'AP': ['Macapá'],
    // 'AM': ['Manaus'],
    // 'BA': ['Salvador'],
    // 'CE': ['Fortaleza'],
    // 'DF': ['Brasília'],
    // 'ES': ['Vitória'],
    // 'GO': ['Goiânia'],
    // 'MA': ['São Luís'],
    // 'MT': ['Cuiabá'],
    // 'MS': ['Campo Grande'],
    // 'MG': ['Belo Horizonte'],
    // 'PA': ['Belém'],
    // 'PB': ['João Pessoa'],
    // 'PR': ['Curitiba'],
    // 'PE': ['Recife'],
    // 'PI': ['Teresina'],
    // 'RJ': ['Rio de Janeiro'],
    // 'RN': ['Natal'],
    // 'RS': ['Porto Alegre'],
    // 'RO': ['Porto Velho'],
    // 'RR': ['Boa Vista'],
    // 'SC': ['Florianópolis'],
     'SP': ['São Paulo'],
    // 'SE': ['Aracaju'],
    // 'TO': ['Palmas']
  };
  
  const estadosDropdown = document.getElementById('estados');
  const cidadesDropdown = document.getElementById('cidades');
  
  estados.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado.sigla;
        option.textContent = estado.nome;
        estadosDropdown.appendChild(option);
    });
    
    estadosDropdown.addEventListener('change', e => {
        const siglaEstadoSelecionado = e.target.value;
        const cidadesDoEstado = cidades[siglaEstadoSelecionado];
        
        cidadesDropdown.innerHTML = '';
        
        cidadesDoEstado.forEach(cidade => {
            const option = document.createElement('option');
            option.value = cidade;
            option.textContent = cidade;
            cidadesDropdown.appendChild(option);
        });
    });
  