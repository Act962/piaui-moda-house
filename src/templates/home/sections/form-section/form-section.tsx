"use client";

import { Button } from "@/components/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useEffect } from "react";

const schema = z.object({
  name: z.string(),
  email: z.email(),
});

type FormData = z.infer<typeof schema>;

export function FormSection() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    console.log(data);
  }

  useEffect(() => {
    console.log("Componente alterado!");
  }, []);

  return (
    <section className="px-4 pt-12 md:px-8 pb-24 text-center">
      <h2 className="font-medium tracking-widest text-xl uppercase">
        Fique por dentro
      </h2>

      <p className="text-sm font-light mt-3">
        Cadastre seu e-mail e receba novidades sobre o PMH - 10 Anos.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl mx-auto mt-8 space-y-4"
      >
        <input
          {...register("name")}
          type="text"
          placeholder="Seu nome"
          className="w-full bg-[#E3E3E3] px-6 py-3 rounded-md focus:outline-none"
          autoComplete="off"
        />

        <input
          {...register("email")}
          type="email"
          placeholder="Seu e-mail"
          className="w-full bg-[#E3E3E3] px-6 py-3 rounded-md focus:outline-none"
          autoComplete="off"
        />

        <Button type="submit" className="mx-auto" disabled={isSubmitting}>
          INSCREVER
        </Button>
      </form>
    </section>
  );
}
