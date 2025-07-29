export enum DataLayer {
  GOLD = 'NEXT_PUBLIC_DB_LAYER_GOLD',
  SILVER = 'NEXT_PUBLIC_DB_LAYER_SILVER',
  BRONZE = 'NEXT_PUBLIC_DB_LAYER_BRONZE',
}

export class TableUtils {
  private static getEnvVar(name: string): string | undefined {
    return process.env[name] || undefined;
  }

  static getTableName(tableName: string, layer: DataLayer): string {
    const env = this.getEnvVar('NEXT_PUBLIC_DB_ENV');
    const layerName = this.getEnvVar(layer);

    const parts: string[] = [];
    if (env?.trim()) parts.push(env.trim());
    if (layerName?.trim()) parts.push(layerName.trim());
    parts.push(tableName);

    return parts.join('.');
  }
}
