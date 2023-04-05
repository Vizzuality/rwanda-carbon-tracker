import React from 'react';

import { HtmlLabel } from '@visx/annotation';
import { Group } from '@visx/group';
import { Treemap, hierarchy, stratify, treemapSquarify } from '@visx/hierarchy';
import { motion, AnimatePresence } from 'framer-motion';

export const background = '#00152E'; // navy

type Data = {
  id: string;
  parent: string | null;
  size: number | null;
};

interface ChartDataTypes {
  data: Data[];
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
}

const COLORS = {
  Agriculture: {
    nodeColor: '#FAD201',
    textColor: '#002E65',
  },
  'Built up areas & Infrastructure': {
    nodeColor: '#00152E',
    textColor: '#FFFFFF',
  },
  Forests: {
    nodeColor: '#47DCAF',
    textColor: '#002E65',
  },
  'Water bodies and protected wetlands': {
    nodeColor: '#5BCEFB',
    textColor: '#002E65',
  },
  'Bare high Slopes': {
    nodeColor: '#002E65',
    textColor: '#FFFFFF',
  },
};

const delays = [1.5, 0.9, 0, 0.3, 0.6, 1.2];
const SustainableLandUseChart = ({
  data,
  width,
  height,
  margin = { top: 0, left: 0, right: 0, bottom: 0 },
}: ChartDataTypes) => {
  const dataParsed = stratify<Data>()
    .id((d) => d.id)
    .parentId((d) => d.parent)(data)
    .sum((d) => d.size ?? 0);
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  const root = hierarchy(dataParsed);
  const variants = {
    hidden: { opacity: 0 },
    show: ({ index, id }) => ({
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: delays[index],
      },
    }),
    sizeInitial: ({ width, height, x, y }) => ({
      width,
      height,
      x,
      y,
    }),
    sizeAnimate: ({ width, height, x, y }) => ({
      width,
      height,
      x,
      y,
    }),
  };
  return (
    <div>
      <div>
        <svg width={width} height={height}>
          <rect width={width} height={height} rx={14} fill={background} />
          <AnimatePresence>
            <Treemap<typeof dataParsed>
              root={root}
              size={[xMax, yMax]}
              tile={treemapSquarify}
              round
            >
              {(treemap) => (
                <Group>
                  {treemap.descendants().map((node, i) => {
                    const nodeWidth = node.x1 - node.x0;
                    const nodeHeight = node.y1 - node.y0;
                    return (
                      <Group key={node.data.id}>
                        {node.depth === 1 && (
                          <motion.rect
                            stroke={background}
                            strokeWidth={0}
                            variants={variants}
                            initial={['hidden', 'sizeInitial']}
                            animate={['show', 'sizeAnimate']}
                            transition={{ duration: 0.3 }}
                            custom={{
                              index: i,
                              width: nodeWidth,
                              height: nodeHeight,
                              x: node.x0,
                              y: node.y0,
                              id: node.data.id,
                            }}
                            fill={COLORS[node.data.id].nodeColor || 0}
                          />
                        )}

                        {node.depth === 1 && nodeWidth !== 0 && (
                          <HtmlLabel
                            x={nodeWidth + node.x0}
                            y={node.y1 - 20}
                            showAnchorLine={false}
                            horizontalAnchor="end"
                            verticalAnchor="end"
                          >
                            <motion.p
                              className="flex h-[100px] items-end justify-end p-2 pr-8 text-end text-xs font-bold uppercase"
                              style={{
                                color: COLORS[node.data.id]?.textColor,
                                width: nodeWidth,
                              }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ type: 'linear', delay: delays[i], duration: 0.35 }}
                            >
                              {node.data.id}
                            </motion.p>
                          </HtmlLabel>
                        )}
                      </Group>
                    );
                  })}
                </Group>
              )}
            </Treemap>
          </AnimatePresence>
        </svg>
      </div>
    </div>
  );
};

export default SustainableLandUseChart;
