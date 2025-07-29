export enum DatabricksLayer {
  GOLD = 'NEXT_PUBLIC_DB_LAYER_GOLD',
  SILVER = 'NEXT_PUBLIC_DB_LAYER_SILVER',
  BRONZE = 'NEXT_PUBLIC_DB_LAYER_BRONZE',
}

export class DatabricksTableUtils {
  private static getEnvVar(name: string): string | undefined {
    return process.env[name] || undefined;
  }

  static getFullTableName(tableName: string, layer: DatabricksLayer): string {
    const env = this.getEnvVar('NEXT_PUBLIC_DB_ENV');
    const layerName = this.getEnvVar(layer);

    const parts: string[] = [];
    if (env?.trim()) parts.push(env.trim());
    if (layerName?.trim()) parts.push(layerName.trim());
    parts.push(tableName);

    return parts.join('.');
  }
}
