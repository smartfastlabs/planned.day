import Page from "~/components/shared/layout/page";
import { Component } from "solid-js";

const Index: Component = () => {
  return (
    <div class="bg-slate-100 print:bg-white print-page">
      {/* -------- Page 1 (front) -------- */}
      <section class="min-h-screen flex items-center justify-center print-wrapper">
        {/* Actual 3.5" x 5.5" card */}
        <div
          class="border border-black p-4 box-border print-card"
          style={{
            width: "3.5in",
            height: "5.5in",
          }}
        >
          <h1 class="text-2xl font-bold mb-2">Your Agenda (P1)</h1>
        </div>
      </section>
    </div>
  );
};

export default Index;
