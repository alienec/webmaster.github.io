import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function ResourceCard({ resource, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link to={`${createPageUrl("ResourceDetail")}?id=${resource.id}`}>
        <div className="bg-white border border-[#e0e0e0] hover:border-black transition-all duration-300 overflow-hidden">
          {resource.image_url && (
            <div className="h-32 overflow-hidden bg-[#e9e5de]">
              <img 
                src={resource.image_url} 
                alt={resource.name}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 p-4"
              />
            </div>
          )}
          <div className="p-6">
            {featured && (
              <p className="text-xs uppercase tracking-wider text-[#777] mb-2">Featured</p>
            )}
            <p className="text-xs uppercase tracking-wider text-[#777] mb-3">{resource.category}</p>
            
            <h3 className="font-medium text-xl mb-3 text-[#2c2c2c]">{resource.name}</h3>
            <p className="font-light text-[#555] mb-6 line-clamp-3 leading-relaxed">{resource.description}</p>
            
            <div className="space-y-2 mb-6 font-light text-sm">
              {resource.phone && (
                <div className="flex items-center gap-2 text-[#555]">
                  <Phone size={14} />
                  <span>{resource.phone}</span>
                </div>
              )}
              {resource.address && (
                <div className="flex items-center gap-2 text-[#555]">
                  <MapPin size={14} />
                  <span className="line-clamp-1">{resource.address}</span>
                </div>
              )}
              {resource.hours && (
                <div className="flex items-center gap-2 text-[#555]">
                  <Clock size={14} />
                  <span>{resource.hours}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 text-sm uppercase tracking-wider border-t border-[#e0e0e0] pt-4 group-hover:border-black transition-colors">
              <span className="text-[#2c2c2c]">View Details</span>
              <ArrowRight size={16} className="text-[#2c2c2c] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}