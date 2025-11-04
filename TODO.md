# TODO: Melhorar Formulário de Demandas com Mini Mapa

- [ ] Atualizar backend/src/models/demandaModel.js: adicionar campos 'estado' e 'cidade' nas funções criarDemanda e listarDemandas.
- [ ] Atualizar backend/src/controllers/demandaController.js: aceitar 'estado' e 'cidade' no postDemanda.
- [ ] Criar frontend/src/components/MiniMap.jsx: componente de mini mapa interativo usando Leaflet para clicar e definir lat/lng.
- [ ] Modificar frontend/src/pages/Home.jsx: adicionar selects para estado e cidade, integrar MiniMap, atualizar estado do formulário.
- [ ] Testar: criar demanda com localização, verificar se salva e exibe corretamente.
