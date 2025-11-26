import {
  listarEstruturas,
  criarEstrutura,
  atualizarEstrutura,
  deletarEstrutura,
  obterEstrutura,
} from "../models/estruturaModel.js";

export const getEstruturas = async (_req, res) => {
  try {
    const data = await listarEstruturas();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar estruturas culturais", error });
  }
};

export const postEstrutura = async (req, res) => {
  try {
    const nova = await criarEstrutura(req.body);
    res.status(201).json(nova);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar estrutura cultural", error });
  }
};

export const putEstrutura = async (req, res) => {
  try {
    const { id } = req.params;
    const atualizada = await atualizarEstrutura(id, req.body);
    res.json(atualizada);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar estrutura cultural", error });
  }
};

export const deleteEstrutura = async (req, res) => {
  try {
    const { id } = req.params;
    const removida = await deletarEstrutura(id);
    res.json(removida);
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar estrutura cultural", error });
  }
};

export const getEstrutura = async (req, res) => {
  try {
    const { identifier } = req.params;
    const estrutura = await obterEstrutura(identifier);
    if (!estrutura) return res.status(404).json({ message: "Estrutura cultural não encontrada" });
    res.json(estrutura);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar estrutura cultural", error });
  }
};

