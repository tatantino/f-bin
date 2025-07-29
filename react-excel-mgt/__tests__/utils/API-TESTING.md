# API 测试最佳实践

本文档提供了项目中 API 测试的最佳实践指南，帮助开发团队编写简洁、高效的测试。

## 测试策略

我们的测试策略基于以下原则：

1. **专注核心路径**：只测试关键功能路径，避免过度测试边缘情况
2. **简洁代码**：保持测试代码简单明了，易于理解和维护
3. **统一结构**：所有测试文件遵循相同的模式和结构
4. **清晰注释**：使用统一的注释风格帮助理解测试意图

## 测试文件结构

每个测试文件应包含以下结构：

```typescript
import { API_METHOD } from '../route';
import { ServiceName } from '../service';
import {
  // 只导入需要的工具
  setupApiMocks,
  mockServiceSuccess,
  mockServiceError,
  expectSuccessResponse,
  expectErrorResponse,
} from '@test-utils';

// 设置 mocks
setupApiMocks();

// 模拟服务
jest.mock('../service', () => ({
  ServiceName: {
    methodName: jest.fn(),
  },
}));

describe('API 名称', () => {
  beforeEach(jest.clearAllMocks);

  describe('端点方法', () => {
    it('成功情况描述', async () => {
      // Mock service response
      mockServiceSuccess(ServiceName.methodName, mockData);

      // Call API endpoint
      const response = await API_METHOD();

      // Verify response
      await expectSuccessResponse(response, expectedData);
    });

    it('错误情况描述', async () => {
      // Mock service error
      mockServiceError(ServiceName.methodName, 'Error message');

      // Call API endpoint
      const response = await API_METHOD();

      // Verify error response
      await expectErrorResponse(response, 'Error message');
    });
  });
});
```

## 命名约定

- **描述块**：使用简短的名称，如 `GET endpoint` 而不是 `GET /api/1.0/path`
- **测试用例**：使用动词开头的简单句子，如 `returns data` 而不是 `should return data successfully`
- **注释**：使用统一的格式，如 `Mock service response`, `Call API endpoint`, `Verify response`

## 示例：路由测试

```typescript
import { GET } from '../route';
import { DataService } from '../service';
import {
  mockServiceSuccess,
  mockServiceError,
  expectSuccessResponse,
  expectErrorResponse,
  setupApiMocks,
} from '@test-utils';

// Setup mocks
setupApiMocks();

// Mock service
jest.mock('../service', () => ({
  DataService: {
    getData: jest.fn(),
  },
}));

describe('Data API', () => {
  beforeEach(jest.clearAllMocks);

  describe('GET endpoint', () => {
    it('returns data', async () => {
      // Mock service response
      mockServiceSuccess(DataService.getData, [{ id: 1, name: 'Test' }]);

      // Call API endpoint
      const response = await GET();

      // Verify response
      await expectSuccessResponse(response, [{ id: 1, name: 'Test' }]);
    });

    it('handles service errors', async () => {
      // Mock service error
      mockServiceError(DataService.getData, 'Database error');

      // Call API endpoint
      const response = await GET();

      // Verify error response
      await expectErrorResponse(response, 'Database error');
    });
  });
});
```

## 示例：服务测试

```typescript
import { DataService } from '../service';
import { DatabaseService } from '@/app/api/_shared/database/service';
import logger from '@/app/api/_shared/utils/logger';
import { expectToThrowWithMessage } from '@test-utils';

// Mock dependencies
jest.mock('@/app/api/_shared/database/service', () => ({
  DatabaseService: {
    queryDirect: jest.fn(),
  },
}));

jest.mock('@/app/api/_shared/utils/logger', () => ({
  __esModule: true,
  default: {
    error: jest.fn(),
    info: jest.fn(),
    debug: jest.fn(),
  },
}));

describe('DataService', () => {
  beforeEach(jest.clearAllMocks);

  describe('getData', () => {
    it('transforms database results', async () => {
      // Mock database response
      (DatabaseService.queryDirect as jest.Mock).mockResolvedValue([{ id: 1, name: 'Test' }]);

      // Call service method
      const result = await DataService.getData();

      // Verify result
      expect(result).toHaveLength(1);
      expect(result[0]).toHaveProperty('id', 1);
    });

    it('handles database errors', async () => {
      // Mock database error
      (DatabaseService.queryDirect as jest.Mock).mockRejectedValue(new Error('Database error'));

      // Verify error handling
      await expectToThrowWithMessage(DataService.getData(), 'Database error');
      expect(logger.error).toHaveBeenCalled();
    });
  });
});
```

## 优化提示

1. **移除不必要的断言**：一个测试只断言关键结果，不需要断言所有细节
2. **合并相似测试**：如果多个测试只是输入数据不同，可以合并为一个测试
3. **使用工具函数**：使用 `setupApiMocks()` 等工具统一处理常见操作
4. **减少重复代码**：避免在每个测试中重复类似的设置代码
5. **简化错误测试**：只测试一种典型错误情况，不必测试所有可能的错误

## 常见问题

**Q: 我们是否需要测试每个边缘情况？**  
A: 不需要。专注于测试主要功能路径和关键错误情况，避免过度测试。

**Q: 什么时候应该模拟参数精确匹配？**  
A: 大多数情况下使用 `expect().toHaveBeenCalled()` 即可。只有在参数非常关键的情况下才使用 `toHaveBeenCalledWith()`。

**Q: 应该为每个 API 路径创建单独的测试文件吗？**  
A: 是的。每个路由文件应有对应的测试文件，以保持清晰的结构。
