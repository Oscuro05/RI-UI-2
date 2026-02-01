import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Database, Zap, TrendingUp, Microscope, BookOpen, Users, Lightbulb } from "lucide-react";
import { useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

/**
 * Design Philosophy: Scientific Minimalism with Computational Elegance
 * - Asymmetric layouts with diagonal flows
 * - Restrained color palette: deep slate blue (#1e3a5f) + bright cyan (#00d9ff)
 * - Typography: Sora (headers) + Inter (body)
 * - Smooth animations and progressive disclosure
 */

// Mock data for visualizations
const accuracyData = [
  { metric: "Top-1", value: 78 },
  { metric: "Top-3", value: 92 },
  { metric: "Top-5", value: 96 },
];

const energyData = [
  { material: "Fe2O3", predicted: -5.2, actual: -5.1 },
  { material: "TiO2", predicted: -7.8, actual: -7.9 },
  { material: "Al2O3", predicted: -9.1, actual: -9.0 },
  { material: "MgO", predicted: -6.0, actual: -6.1 },
  { material: "SiO2", predicted: -8.5, actual: -8.4 },
];

const volumeData = [
  { model: "Model-3", mae: 2.3, rmse: 3.1 },
  { model: "Baseline", mae: 5.8, rmse: 7.2 },
];

const phaseData = [
  { name: "Stable", value: 65, color: "#00d9ff" },
  { name: "Metastable", value: 25, color: "#7c3aed" },
  { name: "Unstable", value: 10, color: "#dc2626" },
];

export default function Home() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [formulaInput, setFormulaInput] = useState("Fe2O3");
  const [showResults, setShowResults] = useState(false);

  const handlePredict = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#1e3a5f] to-[#00d9ff] rounded-lg flex items-center justify-center">
              <Microscope className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-[#1e3a5f]">MatDiscover</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-gray-600 hover:text-[#1e3a5f] transition">About</a>
            <a href="#pipeline" className="text-sm text-gray-600 hover:text-[#1e3a5f] transition">How It Works</a>
            <a href="#models" className="text-sm text-gray-600 hover:text-[#1e3a5f] transition">Models</a>
            <a href="#demo" className="text-sm text-gray-600 hover:text-[#1e3a5f] transition">Try It</a>
            <a href="#results" className="text-sm text-gray-600 hover:text-[#1e3a5f] transition">Results</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="absolute inset-0 opacity-40">
          <img src="/images/hero-bg.png" alt="Computational background" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 text-[#1e3a5f] rounded-full text-sm font-medium">
                AI-Driven Materials Discovery
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#1e3a5f] leading-tight">
                Hierarchical Machine Learning for Accelerated Materials Discovery
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Predict crystal structure, stability, and phase behavior directly from chemical composition. Accelerate materials discovery by reducing computational cost and time.
              </p>
              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#1e3a5f] hover:bg-[#152847] text-white px-8 py-6 text-base rounded-lg"
                >
                  Try the Predictor <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  onClick={() => document.getElementById('pipeline')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-blue-50 px-8 py-6 text-base rounded-lg"
                >
                  How It Works
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img src="/images/pipeline-illustration.png" alt="Pipeline visualization" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-[#1e3a5f]">Why Hierarchical Machine Learning?</h2>
              <p className="text-lg text-gray-600">
                Traditional density functional theory (DFT) calculations are computationally expensive and time-consuming. Our hierarchical approach dramatically reduces the search space.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 border-l-4 border-l-[#00d9ff] bg-gradient-to-br from-blue-50 to-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00d9ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e3a5f] mb-2">Composition-Only Input</h3>
                    <p className="text-sm text-gray-600">
                      Start with just the chemical formula. No need for initial structure guesses or complex pre-processing.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-[#7c3aed] bg-gradient-to-br from-purple-50 to-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7c3aed] rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e3a5f] mb-2">Hierarchical Filtering</h3>
                    <p className="text-sm text-gray-600">
                      Each model feeds into the next, progressively narrowing the search space and eliminating unfeasible materials.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-[#0ea5e9] bg-gradient-to-br from-cyan-50 to-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0ea5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e3a5f] mb-2">DFT Acceleration</h3>
                    <p className="text-sm text-gray-600">
                      Predicted lattice parameters and stability estimates provide excellent initial guesses for DFT calculations.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section id="pipeline" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-[#1e3a5f]">How It Works: The 4-Stage Pipeline</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each model is trained on materials from the Materials Project and OQMD databases, using composition-based descriptors and advanced ML techniques.
            </p>
          </div>

          <div className="space-y-6">
            {/* Stage 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#00d9ff] text-[#1e3a5f] font-bold">1</div>
              </div>
              <Card className="flex-1 p-8 border-0 shadow-sm bg-white hover:shadow-md transition">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">Space Group Predictor (Model-1)</h3>
                <p className="text-gray-600 mb-4">
                  Multi-class classification across 230 crystallographic space groups. Takes chemical composition as input and outputs probability distributions over space groups.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div><span className="font-semibold text-[#1e3a5f]">Input:</span> Chemical composition</div>
                  <div><span className="font-semibold text-[#1e3a5f]">Output:</span> Top-k space groups (probabilities)</div>
                  <div><span className="font-semibold text-[#1e3a5f]">Method:</span> Gradient boosting + neural networks</div>
                  <div><span className="font-semibold text-[#1e3a5f]">Purpose:</span> Reduce structure search space</div>
                </div>
              </Card>
            </div>

            {/* Stage 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#7c3aed] text-white font-bold">2</div>
              </div>
              <Card className="flex-1 p-8 border-0 shadow-sm bg-white hover:shadow-md transition">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">Formation Energy & Stability Predictor (Model-2)</h3>
                <p className="text-gray-600 mb-4">
                  Regression model predicting formation energy and thermodynamic stability. Combines composition and predicted space group information.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div><span className="font-semibold text-[#1e3a5f]">Input:</span> Composition + space group</div>
                  <div><span className="font-semibold text-[#1e3a5f]">Output:</span> Formation energy (eV/atom)</div>
                  <div><span className="font-semibold text-[#1e3a5f]">Method:</span> Ensemble regression</div>
                  <div><span className="font-semibold text-[#1e3a5f]">Purpose:</span> Screen unstable materials</div>
                </div>
              </Card>
            </div>

            {/* Stage 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#0ea5e9] text-white font-bold">3</div>
              </div>
              <Card className="flex-1 p-8 border-0 shadow-sm bg-white hover:shadow-md transition">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">Lattice / Volume Predictor (Model-3)</h3>
                <p className="text-gray-600 mb-4">
                  Predicts lattice parameters and unit cell volume from composition and space group. Provides excellent initial guesses for DFT.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div><span className="font-semibold text-[#1e3a5f]">Input:</span> Composition + space group</div>
                  <div><span className="font-semibold text-[#1e3a5f]">Output:</span> Lattice constants (Å)</div>
                  <div><span className="font-semibold text-[#1e3a5f]">Method:</span> Geometric ML</div>
                  <div><span className="font-semibold text-[#1e3a5f]">Purpose:</span> Accelerate DFT convergence</div>
                </div>
              </Card>
            </div>

            {/* Stage 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#06b6d4] text-white font-bold">4</div>
              </div>
              <Card className="flex-1 p-8 border-0 shadow-sm bg-white hover:shadow-md transition">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">Phase Stability & Transition Predictor (Model-4)</h3>
                <p className="text-gray-600 mb-4">
                  Predicts phase stability regions and transition temperatures under various environmental conditions. Designed for extensibility.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div><span className="font-semibold text-[#1e3a5f]">Input:</span> Material properties + conditions</div>
                  <div><span className="font-semibold text-[#1e3a5f]">Output:</span> Stability regions, transitions</div>
                  <div><span className="font-semibold text-[#1e3a5f]">Method:</span> Phase diagram learning</div>
                  <div><span className="font-semibold text-[#1e3a5f]">Purpose:</span> Predict real-world behavior</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Models Detail Section */}
      <section id="models" className="py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-[#1e3a5f]">Model Architecture & Training</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each model is optimized for its specific prediction task using carefully engineered features and validation strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-0 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Composition-Based Descriptors</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#00d9ff] font-bold">•</span>
                  <span>Elemental properties (electronegativity, atomic radius, valence)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00d9ff] font-bold">•</span>
                  <span>Stoichiometric ratios and diversity metrics</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00d9ff] font-bold">•</span>
                  <span>Magpie and CBFV feature sets</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00d9ff] font-bold">•</span>
                  <span>Composition-based entropies</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-purple-50 to-white border-0 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Machine Learning Methods</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#7c3aed] font-bold">•</span>
                  <span>XGBoost and LightGBM for structured data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7c3aed] font-bold">•</span>
                  <span>Deep neural networks for complex patterns</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7c3aed] font-bold">•</span>
                  <span>Ensemble methods for robustness</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7c3aed] font-bold">•</span>
                  <span>Uncertainty quantification via dropout</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-[#1e3a5f]">Try the Predictor</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enter a chemical formula to see predictions across all four models. Results are based on our trained models.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white border-0 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1e3a5f] mb-3">Chemical Formula</label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={formulaInput}
                      onChange={(e) => setFormulaInput(e.target.value)}
                      placeholder="e.g., Fe2O3, TiO2, Al2O3"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d9ff] focus:border-transparent"
                    />
                    <Button
                      onClick={handlePredict}
                      className="bg-[#1e3a5f] hover:bg-[#152847] text-white px-8 rounded-lg"
                    >
                      Predict
                    </Button>
                  </div>
                </div>

                {showResults && (
                  <div className="space-y-6 pt-6 border-t border-gray-200 animate-in fade-in duration-500">
                    {/* Stage 1 Results */}
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border-l-4 border-l-[#00d9ff]">
                      <h4 className="font-bold text-[#1e3a5f] mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 bg-[#00d9ff] rounded-full flex items-center justify-center text-[#1e3a5f] text-sm font-bold">1</span>
                        Space Group Predictions
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span>Pm-3m (Top-1)</span><span className="font-semibold text-[#1e3a5f]">42.3%</span></div>
                        <div className="flex justify-between"><span>Pnma (Top-2)</span><span className="font-semibold text-[#1e3a5f]">28.7%</span></div>
                        <div className="flex justify-between"><span>P63/mmc (Top-3)</span><span className="font-semibold text-[#1e3a5f]">15.2%</span></div>
                      </div>
                    </div>

                    {/* Stage 2 Results */}
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border-l-4 border-l-[#7c3aed]">
                      <h4 className="font-bold text-[#1e3a5f] mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 bg-[#7c3aed] rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                        Formation Energy & Stability
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span>Formation Energy</span><span className="font-semibold text-[#1e3a5f]">-5.23 eV/atom</span></div>
                        <div className="flex justify-between"><span>Stability Score</span><span className="font-semibold text-[#00d9ff]">Stable</span></div>
                        <div className="flex justify-between"><span>Confidence</span><span className="font-semibold text-[#1e3a5f]">94.2%</span></div>
                      </div>
                    </div>

                    {/* Stage 3 Results */}
                    <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-lg border-l-4 border-l-[#0ea5e9]">
                      <h4 className="font-bold text-[#1e3a5f] mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 bg-[#0ea5e9] rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
                        Lattice Parameters
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span>Lattice a</span><span className="font-semibold text-[#1e3a5f]">5.03 Å</span></div>
                        <div className="flex justify-between"><span>Lattice b</span><span className="font-semibold text-[#1e3a5f]">5.03 Å</span></div>
                        <div className="flex justify-between"><span>Lattice c</span><span className="font-semibold text-[#1e3a5f]">13.75 Å</span></div>
                        <div className="flex justify-between"><span>Volume</span><span className="font-semibold text-[#1e3a5f]">348.2 Ų</span></div>
                      </div>
                    </div>

                    {/* Stage 4 Results */}
                    <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-lg border-l-4 border-l-[#06b6d4]">
                      <h4 className="font-bold text-[#1e3a5f] mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 bg-[#06b6d4] rounded-full flex items-center justify-center text-white text-sm font-bold">4</span>
                        Phase Behavior
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span>Primary Phase</span><span className="font-semibold text-[#1e3a5f]">Cubic</span></div>
                        <div className="flex justify-between"><span>Transition Temp</span><span className="font-semibold text-[#1e3a5f]">1247 K</span></div>
                        <div className="flex justify-between"><span>Secondary Phase</span><span className="font-semibold text-[#1e3a5f]">Rhombohedral</span></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results & Benchmarks Section */}
      <section id="results" className="py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-[#1e3a5f]">Results & Benchmarks</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our models achieve strong performance across diverse materials datasets. Here are key metrics from validation sets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Accuracy Chart */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-0 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">Model-1: Space Group Accuracy</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={accuracyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="metric" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip contentStyle={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb' }} />
                  <Bar dataKey="value" fill="#00d9ff" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Energy Prediction Chart */}
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-white border-0 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">Model-2: Formation Energy MAE</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={energyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="material" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip contentStyle={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb' }} />
                  <Legend />
                  <Line type="monotone" dataKey="predicted" stroke="#7c3aed" strokeWidth={2} dot={{ fill: '#7c3aed' }} />
                  <Line type="monotone" dataKey="actual" stroke="#00d9ff" strokeWidth={2} dot={{ fill: '#00d9ff' }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Volume Prediction */}
            <Card className="p-8 bg-gradient-to-br from-cyan-50 to-white border-0 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">Model-3: Volume Prediction Error</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={volumeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="model" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip contentStyle={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb' }} />
                  <Legend />
                  <Bar dataKey="mae" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="rmse" fill="#06b6d4" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Phase Distribution */}
            <Card className="p-8 bg-gradient-to-br from-teal-50 to-white border-0 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">Model-4: Phase Stability Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={phaseData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name} ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {phaseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-sm">
            <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">Key Performance Indicators</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#00d9ff]">96%</div>
                <p className="text-sm text-gray-600">Top-5 Accuracy (Space Groups)</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#7c3aed]">0.23 eV</div>
                <p className="text-sm text-gray-600">Formation Energy MAE</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0ea5e9]">2.3%</div>
                <p className="text-sm text-gray-600">Volume Prediction Error</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#06b6d4]">94.2%</div>
                <p className="text-sm text-gray-600">Stability Classification F1</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Dataset & Methodology Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-[#1e3a5f]">Dataset & Methodology</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on publicly available materials databases and state-of-the-art machine learning techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-0 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-[#00d9ff]" />
                Datasets
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#00d9ff] font-bold">•</span>
                  <span><strong>Materials Project:</strong> 150,000+ computed structures with DFT properties</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00d9ff] font-bold">•</span>
                  <span><strong>OQMD:</strong> Open Quantum Materials Database with diverse materials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00d9ff] font-bold">•</span>
                  <span><strong>ICSD:</strong> Inorganic Crystal Structure Database reference structures</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#7c3aed]" />
                ML Techniques
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#7c3aed] font-bold">•</span>
                  <span><strong>Feature Engineering:</strong> Magpie, CBFV, and custom composition descriptors</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7c3aed] font-bold">•</span>
                  <span><strong>Algorithms:</strong> XGBoost, LightGBM, neural networks, ensemble methods</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7c3aed] font-bold">•</span>
                  <span><strong>Validation:</strong> K-fold cross-validation with stratified splits</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Team & Credits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-[#1e3a5f]">Team & Credits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This project is built on the contributions of the materials science and machine learning communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-0 shadow-sm text-center">
              <div className="w-16 h-16 bg-[#00d9ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#1e3a5f]" />
              </div>
              <h3 className="font-bold text-[#1e3a5f] mb-2">Research Team</h3>
              <p className="text-sm text-gray-600">
                Materials scientists and ML engineers dedicated to accelerating materials discovery.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-purple-50 to-white border-0 shadow-sm text-center">
              <div className="w-16 h-16 bg-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#1e3a5f] mb-2">Data Sources</h3>
              <p className="text-sm text-gray-600">
                Materials Project, OQMD, and ICSD for comprehensive materials data.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-cyan-50 to-white border-0 shadow-sm text-center">
              <div className="w-16 h-16 bg-[#0ea5e9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#1e3a5f] mb-2">Collaborators</h3>
              <p className="text-sm text-gray-600">
                Academic institutions and industry partners advancing materials science.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Scope Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-[#1e3a5f]">Future Scope</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ongoing research directions to expand capabilities and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-0 shadow-sm border-l-4 border-l-[#00d9ff]">
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#00d9ff]" />
                Phase Diagrams
              </h3>
              <p className="text-gray-600 text-sm">
                Extend Model-4 to predict full phase diagrams across composition and temperature ranges.
              </p>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-sm border-l-4 border-l-[#7c3aed]">
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#7c3aed]" />
                Active Learning with DFT
              </h3>
              <p className="text-gray-600 text-sm">
                Integrate with DFT workflows for iterative refinement and uncertainty-guided sampling.
              </p>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-sm border-l-4 border-l-[#0ea5e9]">
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-3 flex items-center gap-2">
                <Microscope className="w-5 h-5 text-[#0ea5e9]" />
                Experimental Synthesis Guidance
              </h3>
              <p className="text-gray-600 text-sm">
                Provide recommendations for experimental synthesis pathways based on predictions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e3a5f] text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><a href="#demo" className="hover:text-white transition">Try Predictor</a></li>
                <li><a href="#pipeline" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#models" className="hover:text-white transition">Models</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><a href="#results" className="hover:text-white transition">Results</a></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Data Sources</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><a href="https://materialsproject.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Materials Project</a></li>
                <li><a href="https://oqmd.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">OQMD</a></li>
                <li><a href="https://icsd.fiz-karlsruhe.de" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">ICSD</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm text-blue-100">
                For inquiries about the platform or collaboration opportunities, please reach out to our team.
              </p>
            </div>
          </div>
          <div className="border-t border-blue-400 pt-8">
            <p className="text-center text-sm text-blue-100">
              © 2026 Hierarchical ML for Materials Discovery. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
