import express from "express";
import {
  getEstruturas,
  postEstrutura,
  putEstrutura,
  deleteEstrutura,
  getEstrutura,
} from "../controllers/estruturaController.js";

const router = express.Router();

router.get("/", getEstruturas);
router.get("/:identifier", getEstrutura);
router.post("/", postEstrutura);
router.put("/:id", putEstrutura);
router.delete("/:id", deleteEstrutura);

export default router;

