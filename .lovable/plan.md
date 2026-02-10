

# Mover Texto "Materiais Didáticos" para Seção de Parcelas

## Resumo

Mover a frase "Materiais didáticos já inclusos na parcela" da seção "Progresso Completo" para dentro da seção "Parcelas 2025/2026" em todos os ciclos de ensino.

---

## Alterações

**Arquivo:** `src/components/EducationTabs.tsx`

### 1. Adicionar texto na seção "Parcelas 2025/2026" (linhas 612-628)

Inserir a frase como um badge/destaque logo abaixo do título "Parcelas 2025/2026":

```tsx
<div className="p-6 bg-highlight/10 border border-highlight/30 rounded-xl">
  <h5 className="font-bold text-primary mb-2">Parcelas 2025/2026</h5>
  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-highlight/20 text-highlight mb-3">
    Materiais didáticos já inclusos na parcela
  </span>
  <div className="space-y-2 text-sm">
    ...
  </div>
</div>
```

### 2. Remover texto da seção "Progresso Completo" (linhas 644-646)

Remover as 3 linhas do span que contém "Materiais didáticos já inclusos na parcela":

```tsx
// REMOVER ESTAS LINHAS:
<span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-highlight/20 text-highlight mb-4">
  Materiais didáticos já inclusos na parcela
</span>
```

---

## Resultado Esperado

- A frase aparecerá em todas as 5 abas (Educação Infantil, Anos Iniciais, Anos Finais, Ensino Médio, IB) dentro do card de Parcelas
- A seção "Progresso Completo" ficará mais limpa, começando direto com o título

