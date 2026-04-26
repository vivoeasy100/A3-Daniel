import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const resumesTable = pgTable("resumes", {
  id: serial("id").primaryKey(), // numero unico de cada curriculo
  name: text("name").notNull(), // nome do candidato
  email: text("email").notNull(), // e-mail
  phone: text("phone").notNull(), // telefone
  city: text("city").notNull(), // cidade
  state: text("state").notNull(), // estado (SP, RJ...)
  linkedinUrl: text("linkedin_url"), // opcional
  summary: text("summary"), // resumo profissional
  experiences: text("experiences"), // experiencias em formato JSON
  education: text("education"), // formacao em formato JSON
  skills: text("skills"), // habilidades em formato JSON
  languages: text("languages"), // idiomas em formato JSON
  createdAt: timestamp("created_at").defaultNow(), // data de criacao
  updatedAt: timestamp("updated_at").defaultNow(), // data da ultima atualizacao
});
