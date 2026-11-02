import { describe, expect, it } from 'vitest';
import { cn, getRiskBand } from '../../src/lib/utils';

describe('getRiskBand', () => {
  it.each([
    [14, 'NEUTRAL'],
    [15, 'LOW'],
    [45, 'MEDIUM'],
    [70, 'HIGH'],
    [85, 'CRITICAL'],
  ] as const)('maps score %i to %s', (score, expected) => {
    expect(getRiskBand(score)).toBe(expected);
  });
});

describe('cn', () => {
  it('merges conflicting Tailwind utility classes', () => {
    expect(cn('px-2 text-red-500', 'px-6 text-blue-500')).toBe('px-6 text-blue-500');
  });
});
