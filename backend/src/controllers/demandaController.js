import { criarDemanda, listarDemandas, atualizarDemanda, deletarDemanda } from "../models/demandaModel.js";

export const getDemandas = async (req, res) => {
  try {
    const demandas = await listarDemandas();
    res.json(demandas);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar demandas", error });
  }
};

export const postDemanda = async (req, res) => {
  try {
    const { titulo, descricao, bairro, estado, cidade, latitude, longitude, usuario_id } = req.body;
    const nova = await criarDemanda(titulo, descricao, bairro, estado, cidade, latitude, longitude, usuario_id);
    res.status(201).json(nova);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar demanda", error });
  }
};

export const putDemanda = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const atualizada = await atualizarDemanda(id, status);
    res.json(atualizada);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar demanda", error });
  }
};

export const deleteDemanda = async (req, res) => {
  try {
    const { id } = req.params;
    const deletada = await deletarDemanda(id);
    res.json(deletada);
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar demanda", error });
  }
};
