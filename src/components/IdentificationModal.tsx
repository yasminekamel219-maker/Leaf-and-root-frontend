import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  AlertCircle,
  Info,
  Sparkles,
  RefreshCw,
  BookmarkPlus,
} from "lucide-react";
import { SAMPLE_PLANTS } from "../data/siteData";
import { PlantSpecimen } from "../types";

interface IdentificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSavePlant?: (plant: PlantSpecimen) => void;
}

export const IdentificationModal: React.FC<IdentificationModalProps> = ({
  isOpen,
  onClose,
  onSavePlant,
}) => {
  const [selectedPlantIndex, setSelectedPlantIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const currentSample = SAMPLE_PLANTS[selectedPlantIndex];

  const handleSelectSample = (index: number) => {
    setSelectedPlantIndex(index);
    setIsAnalyzing(true);
    setSavedSuccess(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalyzed(true);
    }, 600);
  };

  const handleSave = () => {
    if (onSavePlant) {
      onSavePlant(currentSample);
    }
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14281E]/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF8F5] rounded-2xl border border-[#E8E2D8] max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8E2D8] flex items-center justify-between bg-[#F4EFEB]">
          <div>
            <span className="text-xs font-semibold text-[#244C38] uppercase tracking-wider">
              Interactive Plant Identification
            </span>
            <h3 className="text-lg font-serif font-bold text-[#14281E]">
              Explore a Botanical Match
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#758178] hover:text-[#14281E] hover:bg-[#E4ECE6] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Sample Photo Selector */}
          <div>
            <label className="block text-xs font-medium text-[#4B554E] uppercase tracking-wider mb-2">
              Step 1: Choose a specimen photograph to inspect
            </label>
            <div className="grid grid-cols-3 gap-3">
              {SAMPLE_PLANTS.map((plant, idx) => (
                <button
                  key={plant.id}
                  type="button"
                  onClick={() => handleSelectSample(idx)}
                  className={`group relative rounded-xl overflow-hidden border-2 text-left transition-all p-1.5 flex flex-col items-center bg-white ${
                    selectedPlantIndex === idx
                      ? "border-[#1B3B2B] ring-2 ring-[#C9D8CD]"
                      : "border-[#E8E2D8] hover:border-[#A8C1AE]"
                  }`}
                >
                  <img
                    src={plant.imageUrl}
                    alt={plant.commonName}
                    className="w-full h-20 object-cover rounded-lg"
                  />
                  <span className="text-xs font-medium text-[#14281E] mt-1.5 text-center line-clamp-1">
                    {plant.commonName}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Analysis View */}
          {isAnalyzing ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 bg-white rounded-xl border border-[#E8E2D8]">
              <RefreshCw className="w-8 h-8 text-[#244C38] animate-spin" />
              <p className="text-sm font-medium text-[#14281E]">
                Evaluating leaf venation, perimeter margin, and node pattern...
              </p>
              <p className="text-xs text-[#758178]">Comparing against botanical taxonomy records</p>
            </div>
          ) : hasAnalyzed && currentSample ? (
            <div className="space-y-4">
              {/* Match Card */}
              <div className="bg-white p-5 rounded-xl border border-[#E8E2D8] shadow-card space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E4ECE6] text-[#1B3B2B] mb-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#244C38]" />
                      <span>High Visual Match (Illustrative)</span>
                    </div>
                    <h4 className="text-xl font-serif font-bold text-[#14281E]">
                      {currentSample.commonName}
                    </h4>
                    <p className="text-sm italic text-[#4B554E]">
                      {currentSample.scientificName} &bull; Family: {currentSample.family}
                    </p>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#FAF8F5] text-[#244C38] border border-[#E8E2D8]">
                    Verified Profile
                  </span>
                </div>

                {/* Botanical Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs border-t border-[#F4EFEB]">
                  <div className="p-3 bg-[#FAF8F5] rounded-lg">
                    <span className="font-semibold text-[#14281E] block mb-0.5">
                      Light Exposure
                    </span>
                    <span className="text-[#4B554E]">{currentSample.lightNeeds}</span>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] rounded-lg">
                    <span className="font-semibold text-[#14281E] block mb-0.5">
                      Watering Cadence
                    </span>
                    <span className="text-[#4B554E]">{currentSample.waterCadence}</span>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] rounded-lg">
                    <span className="font-semibold text-[#14281E] block mb-0.5">
                      Substrate Preference
                    </span>
                    <span className="text-[#4B554E]">{currentSample.soilPreference}</span>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] rounded-lg">
                    <span className="font-semibold text-[#14281E] block mb-0.5">
                      Toxicity Consideration
                    </span>
                    <span className="text-[#734827]">{currentSample.toxicity}</span>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8] text-xs text-[#758178]">
                  <Info className="w-4 h-4 text-[#244C38] shrink-0 mt-0.5" />
                  <p>
                    <strong>Informational note:</strong> Image-based matching provides suggestions
                    to explore rather than a guaranteed botanical determination. Inspect physical
                    stem nodes and mature foliage before making care decisions.
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#E8E2D8] bg-[#F4EFEB] flex items-center justify-between">
          <p className="text-xs text-[#758178]">
            {savedSuccess ? (
              <span className="text-[#1B3B2B] font-medium flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#244C38]" />
                Plant saved to your local session roster!
              </span>
            ) : (
              "Sample identification preview"
            )}
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#4B554E] hover:text-[#14281E] transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 text-xs font-medium bg-[#1B3B2B] hover:bg-[#244C38] text-white rounded-lg transition-colors flex items-center gap-1.5 shadow-subtle"
            >
              <BookmarkPlus className="w-3.5 h-3.5 text-[#C9D8CD]" />
              <span>Add to Plant Collection</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
