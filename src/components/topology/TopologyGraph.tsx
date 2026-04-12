
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Device, Link } from '@/types/tfs';

interface TopologyGraphProps {
  devices: Device[];
  links: Link[];
  onNavigate: (id: string, type: 'device' | 'link' | 'service' | 'slice') => void;
}

export function TopologyGraph({ devices, links, onNavigate }: TopologyGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || devices.length === 0) return;

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const g = svg.append("g");

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Create local copies to prevent mutation of the original data
    const nodes = devices.map(d => ({ ...d }));
    const edges = links.map(l => ({ ...l }));

    // Simulation
    const simulation = d3.forceSimulation(nodes as any)
      .force("link", d3.forceLink(edges).id((d: any) => d.id).distance(150))
      .force("charge", d3.forceManyBody().strength(-500))
      .force("center", d3.forceCenter(width / 2, height / 2));

    // Links
    const link = g.append("g")
      .attr("stroke", "#3f3f46")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(edges)
      .join("line")
      .attr("stroke-width", 2)
      .attr("class", "cursor-pointer hover:stroke-blue-500 transition-colors")
      .on("click", (event, d: any) => {
        onNavigate(d.id, 'link');
      });

    // Nodes
    const node = g.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("class", "cursor-pointer")
      .on("click", (event, d: any) => {
        onNavigate(d.id, 'device');
      })
      .call(d3.drag<any, any>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended) as any);

    // Node circles
    node.append("circle")
      .attr("r", 20)
      .attr("fill", (d: any) => d.status === 'OPERATIONAL' ? "#2563eb" : "#71717a")
      .attr("stroke", "#1e293b")
      .attr("stroke-width", 2);

    // Node labels
    node.append("text")
      .text((d: any) => d.name)
      .attr("x", 25)
      .attr("y", 5)
      .attr("fill", "#e4e4e7")
      .attr("font-size", "12px")
      .attr("font-family", "monospace");

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node
        .attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [devices, links]);

  return (
    <div className="w-full h-full bg-zinc-950 rounded-lg border border-zinc-800 overflow-hidden relative">
      <svg ref={svgRef} className="w-full h-full" />
      <div className="absolute bottom-4 left-4 bg-zinc-900/80 backdrop-blur border border-zinc-800 p-3 rounded text-[10px] text-zinc-400 font-mono space-y-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600" />
          <span>OPERATIONAL DEVICE</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-zinc-500" />
          <span>DISABLED DEVICE</span>
        </div>
      </div>
    </div>
  );
}
