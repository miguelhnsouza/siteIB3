import React, { useState, useMemo, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LabelList,
} from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import { trackCustomEvent } from "../../utils/metaPixel";

export default function Simulador() {
  const [valor, setValor] = useState(1000);
  const [meses, setMeses] = useState(12);
  const [inputDigits, setInputDigits] = useState(String(1000));
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setInputDigits(String(valor));
  }, [valor]);

  const taxas = { hrt: 0.25 / 12, cdi: 0.009, poupanca: 0.005 };

  const dados = useMemo(() => {
    const now = new Date();
    const future = new Date(now.getFullYear(), now.getMonth());
    future.setMonth(future.getMonth() + meses);
    const monthShort = future.toLocaleString('pt-BR', { month: 'short' }).replace('.', '');
    const year = future.getFullYear();

    return [
      {
        periodo: `${monthShort}/${year} (${meses}m)`,
        "Seu Investimento": Math.round(valor * Math.pow(1 + taxas.hrt, meses)),
        CDI: Math.round(valor * Math.pow(1 + taxas.cdi, meses)),
        Poupança: Math.round(valor * Math.pow(1 + taxas.poupanca, meses)),
      }
    ];
  }, [valor, meses]);

  const renderCustomBarLabel = (props) => {
    const { x, y, width, value, name } = props;
    const color =
      name === "Seu Investimento" ? "#72c0d1" : "rgba(255,255,255,0.5)";

    return (
      <g>
        <text
          x={x + 5}
          y={y - 25}
          fill={color}
          fontSize={10}
          fontWeight="bold"
          textAnchor="start"
          style={{ textTransform: "uppercase" }}
        >
          {name === "Seu Investimento" ? "IB3" : name}
        </text>
        <text
          x={x + 5}
          y={y - 8}
          fill={color}
          fontSize={13}
          fontWeight="bold"
          textAnchor="start"
        >
          R$ {value.toLocaleString("pt-BR")}
        </text>
      </g>
    );
  };

  return (
    <section className="py-5 text-white" style={{ backgroundColor: "#0b0b0b" }} id="simulador">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 style={{ color: '#fff', fontFamily: 'Axiforma, serif', fontWeight: 400 }}>Entenda o poder de investir<br />através da plataforma <span style={{color: "#72c0d1", fontWeight: 700}}>IB3 Capital</span></h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 d-flex flex-column justify-content-between">
            <h2
              className="fs-3 mb-5 lh-1"
              style={{ fontFamily: "Axiforma, serif" }}
            >
              Simulador de <br /> Investimentos
            </h2>

            <div className="mb-5">
              <label className="form-label small opacity-75 text-uppercase mb-2">
                Quanto quer investir?
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                className="form-control-minimal fw-bold"
                value={editing ? inputDigits : `R$ ${Number(inputDigits || 0).toLocaleString('pt-BR')}`}
                onFocus={() => {
                  setEditing(true);
                  setInputDigits(String(valor));
                }}
                onChange={(e) => {
                  const onlyDigits = e.target.value.replace(/[^0-9]/g, '');
                  setInputDigits(onlyDigits);
                }}
                onBlur={() => {
                  const parsed = inputDigits ? Number(inputDigits) : 0;
                  const clamped = Math.max(1000, Math.min(1000000, parsed));
                  setValor(clamped);
                  setInputDigits(String(clamped));
                  setEditing(false);
                  trackCustomEvent('Realizar_Simulacao', { valor: clamped, meses });
                }}
              />
            </div>

            <div className="mb-5">
              <label className="form-label d-flex justify-content-between small opacity-75 text-uppercase">
                Por quanto tempo? <span>{meses} Meses</span>
              </label>
              <input
                type="range"
                className="form-range custom-range"
                min="6"
                max="60"
                step="6"
                value={meses}
                onChange={(e) => {
                  setMeses(Number(e.target.value));
                  trackCustomEvent('Realizar_Simulacao', { valor, meses: Number(e.target.value) });
                }}
              />
            </div>

            <div
              className="p-4 rounded-4 border border-secondary border-opacity-25"
              style={{ background: "rgba(205,187,163,0.08)" }}
            >
              <small
                className="d-block text-uppercase opacity-50 mb-1" 
                style={{ fontSize: "0.7rem", letterSpacing: "1.5px" }}
              >
                Patrimônio final estimado
              </small>
              <span className="h2 d-block mb-2 fw-bold" style={{ color: "#72c0d1" }}>
                R${" "}
                {dados[dados.length - 1]?.["Seu Investimento"].toLocaleString(
                  "pt-BR"
                )}
              </span>
              <span
                className="fw-bold"
                style={{ color: "#28a745", fontSize: "0.95rem" }}
              >
                 + R${" "}
                {(
                  (dados[dados.length - 1]?.["Seu Investimento"] || 0) - valor
                ).toLocaleString("pt-BR")}
              </span>
            </div>
          </div>

          <div className="col-lg-8">
            <div
              className="p-4 rounded-5 h-100"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div style={{ width: "100%", height: 450 }}>
                <ResponsiveContainer>
                  <BarChart
                    data={dados}
                    margin={{ top: 60, right: 10, left: 0, bottom: 0 }}
                    barGap={15}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="rgba(255,255,255,0.05)"
                    />
                    <XAxis
                      dataKey="periodo"
                      stroke="rgba(255,255,255,0.2)"
                      axisLine={false}
                      tickLine={false}
                      dy={10}
                    />

                    <YAxis hide domain={[valor * 0.95, "dataMax"]} />

                    <Tooltip
                      cursor={{ fill: "rgba(255,255,255,0.05)" }}
                      contentStyle={{ display: "none" }}
                    />

                    <Bar
                      dataKey="Seu Investimento"
                      fill="#72c0d1"
                      radius={[2, 2, 0, 0]}
                      barSize={150}
                    >
                      <LabelList
                        dataKey="Seu Investimento"
                        content={(props) =>
                          renderCustomBarLabel({
                            ...props,
                            name: "Seu Investimento",
                          })
                        }
                      />
                    </Bar>

                    <Bar
                      dataKey="CDI"
                      fill="rgba(255,255,255,0.3)"
                      radius={[2, 2, 0, 0]}
                      barSize={150}
                    >
                      <LabelList
                        dataKey="CDI"
                        content={(props) =>
                          renderCustomBarLabel({ ...props, name: "CDI" })
                        }
                      />
                    </Bar>

                    <Bar
                      dataKey="Poupança"
                      fill="rgba(255,255,255,0.15)"
                      radius={[2, 2, 0, 0]}
                      barSize={150}
                    >
                      <LabelList
                        dataKey="Poupança"
                        content={(props) =>
                          renderCustomBarLabel({ ...props, name: "Poupança" })
                        }
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
                .form-control-minimal {
                    background: transparent; border: none; border-bottom: 2px solid rgba(205, 187, 163, 0.3);
                    border-radius: 0; color: #72c0d1; font-size: 1.5rem; padding: 5px 0; width: 100%; outline: none;
                }
                .custom-range::-webkit-slider-runnable-track { background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; }
                .custom-range::-webkit-slider-thumb { background: #72c0d1; margin-top: -6px; height: 16px; width: 16px; border-radius: 50%; border: none; cursor: pointer; }
                input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; }
            `}</style>
    </section>
  );
}
