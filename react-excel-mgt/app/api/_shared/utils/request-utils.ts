import { NextRequest } from 'next/server';

export interface PaginationParams {
  page: number;
  limit: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 1000;
const MIN_LIMIT = 1;

export class RequestUtils {
  static extractPaginationParams(request: NextRequest): PaginationParams {
    const params = new URL(request.url).searchParams;
    const page = Math.max(
      Number(params.get('page')) || DEFAULT_PAGE,
      DEFAULT_PAGE
    );
    const limit = Math.max(
      Number(params.get('limit')) || DEFAULT_LIMIT,
      MIN_LIMIT
    );
    const sort = params.get('sort') || undefined;
    const order = params.get('order')?.toLowerCase() as
      | 'asc'
      | 'desc'
      | undefined;

    return { page, limit, sort, order };
  }

  /**
   * Extract search parameters from URL with optional default values
   * @param searchParams URLSearchParams object
   * @param paramNames Array of parameter names to extract
   * @returns Object with parameter values, undefined if not present
   */
  static extractSearchParams(
    searchParams: URLSearchParams,
    paramNames: string[]
  ): Record<string, string | undefined> {
    const result: Record<string, string | undefined> = {};

    paramNames.forEach(name => {
      const value = searchParams.get(name);
      result[name] = value || undefined;
    });

    return result;
  }
}
