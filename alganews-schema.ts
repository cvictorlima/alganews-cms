/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/users/{userId}": {
    /** Se a requisição for autenticada para um editor, só poderá ter acesso ao recurso do próprio usuário. <br>Caso a requisição for autenticada para um gerente ou assistente, poderá ter acesso a qualquer recurso de usuário. */
    get: operations["getUserById"];
    /** Apenas requisições autenticadas para gerentes ou assistentes são válidas. <br>Assistentes não podem atualizar informações sensíveis de usuários com perfis de nível de acesso maior que os seus. */
    put: operations["updateUser"];
    parameters: {
      path: {
        userId: number;
      };
    };
  };
  "/users": {
    /** Apenas requisições autenticadas para gerentes ou assistentes são válidas. */
    get: operations["getUsers"];
    /** Apenas requisições autenticadas para gerentes ou assistentes são válidas. <br>Assistentes não podem criar usuários com perfis de nível de acesso maior que os seus. */
    post: operations["createUser"];
  };
  "/users/{userId}/activation": {
    /** Apenas requisições autenticadas para gerentes ou assistentes são válidas. <br>Assistentes não podem ativar usuários com perfis de nível de acesso maior que os seus. */
    put: operations["activateUser"];
    /** Apenas requisições autenticadas para gerentes ou assistentes são válidas. <br>Assistentes não podem desativar usuários com perfis de nível de acesso maior que os seus. */
    delete: operations["deactivateUser"];
    parameters: {
      path: {
        userId: number;
      };
    };
  };
  "/users/editors/{editorId}": {
    get: operations["getEditorById"];
    parameters: {
      path: {
        editorId: number;
      };
    };
  };
  "/users/editors": {
    get: operations["getEditors"];
  };
  "/posts": {
    get: operations["getPosts"];
    post: operations["createPost"];
  };
  "/posts/{postId}": {
    get: operations["getPostById"];
    put: operations["updatePost"];
    delete: operations["deletePost"];
    parameters: {
      path: {
        postId: number;
      };
    };
  };
  "/posts/{postId}/publishing": {
    put: operations["publishPost"];
    delete: operations["unpublishPost"];
    parameters: {
      path: {
        postId: number;
      };
    };
  };
  "/payments": {
    get: operations["getPayments"];
    post: operations["createPayment"];
  };
  "/payments/bulk-approvals": {
    put: operations["approveBulkPayments"];
  };
  "/payments/previews": {
    /** Uma simulação de pagamento não é persistida no sistema */
    post: operations["createPaymentPreview"];
  };
  "/payments/{paymentId}/approval": {
    put: operations["approvePayment"];
    parameters: {
      path: {
        /** ID do pagamento */
        paymentId: number;
      };
    };
  };
  "/payments/{paymentId}": {
    get: operations["getPayment"];
    /** Exclui fisicamente um pagamento. Caso o pagamento já tenha sido aprovado, não será possível excluí-lo. */
    delete: operations["deletePayment"];
    parameters: {
      path: {
        /** ID do pagamento */
        paymentId: number;
      };
    };
  };
  "/payments/{paymentId}/posts": {
    get: operations["getPostsByPayment"];
    parameters: {
      path: {
        paymentId: number;
      };
      query: {
        /** Nome da propriedade para ordenação */
        sort?: components["parameters"]["pageSort"];
      };
    };
  };
  "/cashflow/entries/{entryId}": {
    get: operations["getCashFlowEntry"];
    /** Não é permitido atualizar um lançamento financeiro gerado pelo sistema. */
    put: operations["updateCashFlowEntry"];
    /** Exclui fisicamente um lançamento financeiro. Caso o lançamento informado tenha sido gerado pelo sistema, não será possível excluí-lo. */
    delete: operations["deleteCashFlowEntry"];
    parameters: {
      path: {
        /** ID do lançamento financeiro */
        entryId: number;
      };
    };
  };
  "/cashflow/entries": {
    get: operations["getCashFlowEntries"];
    post: operations["createCashFlowEntry"];
  };
  "/cashflow/entries/bulk-removals": {
    put: operations["deleteBulkCashFlowEntries"];
  };
  "/cashflow/categories/{categoryId}": {
    get: operations["getCashFlowCategory"];
    put: operations["updateCashFlowCategory"];
    /** Exclui fisicamente uma categoria. Caso a categoria possua lançamentos vinculados, não será possível excluí-la. */
    delete: operations["deleteCashFlowCategory"];
    parameters: {
      path: {
        /** ID da categoria */
        categoryId: number;
      };
    };
  };
  "/cashflow/categories": {
    get: operations["getCashFlowCategories"];
    post: operations["createCashFlowCategory"];
  };
  "/metrics/monthly-revenues-expenses": {
    get: {
      parameters: {
        query: {
          /** Ano para filtro da consulta */
          yearMonth: string;
        };
      };
      responses: {
        /** OK */
        200: {
          content: {
            "application/json": components["schemas"]["MonthlyRevenuesExpenses"];
            "application/vnd.alganews.chartjs+json": components["schemas"]["MonthlyRevenuesExpensesChartjs"];
          };
        };
      };
    };
  };
  "/metrics/editor/monthly-earnings": {
    get: {
      parameters: {
        query: {
          /** Ano para filtro da consulta */
          yearMonth: string;
        };
      };
      responses: {
        /** OK */
        200: {
          content: {
            "application/json": components["schemas"]["EditorMonthlyEarnings"];
          };
        };
      };
    };
  };
  "/metrics/editor/top3-tags": {
    get: {
      responses: {
        /** OK */
        200: {
          content: {
            "application/json": components["schemas"]["EditorTagRatio"];
          };
        };
      };
    };
  };
  "/upload-requests": {
    post: operations["createUploadRequest"];
  };
}

export interface components {
  schemas: {
    /** Usuário muito resumido (mínimo) possui apenas id, nome e avatar. */
    UserMinimal: {
      id: number;
      name: string;
      avatarUrls: components["schemas"]["ImageUrls"];
    };
    /** Usuário resumido possui apenas os principais dados. */
    UserSummary: {
      id: number;
      name: string;
      email: string;
      avatarUrls: components["schemas"]["ImageUrls"];
      role: components["schemas"]["Role"];
      active: boolean;
      createdAt: string;
      /** Se o usuário autenticado pode ou não ativar este usuário */
      canBeActivated: boolean;
      /** Se o usuário autenticado pode ou não desativar este usuário */
      canBeDeactivated: boolean;
      /** Se o usuário autenticado pode ou não alterar dados sensíveis deste usuário */
      canSensitiveDataBeUpdated: boolean;
    };
    /** Usuário detalhado contém todos os dados. */
    UserDetailed: {
      id: number;
      name: string;
      email: string;
      avatarUrls: components["schemas"]["ImageUrls"];
      bio: string;
      role: components["schemas"]["Role"];
      birthdate: string;
      phone: string;
      taxpayerId: string;
      pricePerWord: number;
      active: boolean;
      createdAt: string;
      bankAccount: components["schemas"]["BankAccount"];
      location: components["schemas"]["Location"];
      skills: components["schemas"]["Skill"][] | null;
      metrics: components["schemas"]["UserMetrics"];
      updatedAt: string;
      updatedBy: components["schemas"]["UserMinimal"];
      createdBy: components["schemas"]["UserMinimal"];
      /** Se o usuário autenticado pode ou não ativar este usuário */
      canBeActivated: boolean;
      /** Se o usuário autenticado pode ou não desativar este usuário */
      canBeDeactivated: boolean;
      /** Se o usuário autenticado pode ou não alterar dados sensíveis deste usuário */
      canSensitiveDataBeUpdated: boolean;
    };
    UserInput: {
      name: string;
      email: string;
      avatarUrl?: string;
      bio: string;
      taxpayerId: string;
      phone: string;
      pricePerWord?: number;
      role: components["schemas"]["Role"];
      birthdate: string;
      bankAccount: components["schemas"]["BankAccount"];
      location: components["schemas"]["Location"];
      skills?: components["schemas"]["Skill"][] | null;
    } & {
      metadata: unknown;
    };
    UserIdInput: {
      id: number;
    };
    UserMetrics: {
      weeklyEarnings: number;
      monthlyEarnings: number;
      lifetimeEarnings: number;
      weeklyWords: number;
      monthlyWords: number;
      lifetimeWords: number;
    };
    /** Editor (usuário) resumido possui apenas os principais dados. */
    EditorSummary: {
      id: number;
      name: string;
      avatarUrls: components["schemas"]["ImageUrls"];
      createdAt: string;
    };
    /** Editor (usuário) detalhado contém todos os dados. */
    EditorDetailed: {
      id: number;
      name: string;
      avatarUrls: components["schemas"]["ImageUrls"];
      bio: string;
      createdAt: string;
      location: components["schemas"]["Location"];
      skills: components["schemas"]["Skill"][] | null;
    };
    PostSummary: {
      id: number;
      slug: string;
      title: string;
      imageUrls: components["schemas"]["ImageUrls"];
      editor: components["schemas"]["EditorSummary"];
      createdAt: string;
      updatedAt: string;
      published: boolean;
      tags: string[];
      /** Se o usuário autenticado pode ou não publicar o post */
      canBePublished: boolean;
      /** Se o usuário autenticado pode ou não despublicar o post */
      canBeUnpublished: boolean;
      /** Se o usuário autenticado pode ou não remover o post */
      canBeDeleted: boolean;
      /** Se o usuário autenticado pode ou não editar o post */
      canBeEdited: boolean;
    };
    PostDetailed: {
      id: number;
      editor: components["schemas"]["EditorSummary"];
      slug: string;
      title: string;
      imageUrls: components["schemas"]["ImageUrls"];
      /** Corpo do post em formato Markdown */
      body: string;
      tags: string[];
      createdAt: string;
      earnings?: components["schemas"]["PostEarnings"];
      published: boolean;
      updatedAt: string;
      updatedBy: components["schemas"]["UserMinimal"];
      /** Se o usuário autenticado pode ou não publicar o post */
      canBePublished: boolean;
      /** Se o usuário autenticado pode ou não despublicar o post */
      canBeUnpublished: boolean;
      /** Se o usuário autenticado pode ou não remover o post */
      canBeDeleted: boolean;
      /** Se o usuário autenticado pode ou não editar o post */
      canBeEdited: boolean;
    };
    PostWithEarnings: {
      id: number;
      title: string;
      imageUrls: components["schemas"]["ImageUrls"];
      createdAt: string;
      earnings: components["schemas"]["PostEarnings"];
      published: boolean;
    };
    PostInput: {
      title: string;
      imageUrl: string;
      /** Este campo retornará uma string marcada utilizando markdown */
      body: string;
      tags: string[];
    };
    PostsPaginated: components["schemas"]["Page"] & {
      content?: components["schemas"]["PostSummary"][];
    };
    PaymentInput: {
      payee: components["schemas"]["UserIdInput"];
      accountingPeriod: components["schemas"]["Period"];
      bonuses?: components["schemas"]["Bonus"][];
      scheduledTo: string;
    };
    PaymentPreviewInput: {
      payee: components["schemas"]["UserIdInput"];
      accountingPeriod: components["schemas"]["Period"];
      bonuses?: components["schemas"]["Bonus"][];
    };
    PaymentPreview: {
      accountingPeriod: components["schemas"]["Period"];
      payee: components["schemas"]["UserMinimal"];
      earnings: components["schemas"]["PaymentEarnings"];
      bonuses: components["schemas"]["Bonus"][];
      grandTotalAmount: number;
      bankAccount: components["schemas"]["BankAccount"];
    };
    PaymentDetailed: {
      id: number;
      accountingPeriod: components["schemas"]["Period"];
      payee: components["schemas"]["UserMinimal"];
      earnings: components["schemas"]["PaymentEarnings"];
      bonuses: components["schemas"]["Bonus"][];
      grandTotalAmount: number;
      bankAccount: components["schemas"]["BankAccount"];
      createdBy: components["schemas"]["UserMinimal"];
      approvedBy: components["schemas"]["UserMinimal"];
      createdAt: string;
      scheduledTo: string;
      approvedAt: string;
      updatedAt: string;
      updatedBy: components["schemas"]["UserMinimal"];
      /** Se o usuário autenticado pode ou não aprovar o pagamento */
      canBeApproved: boolean;
      /** Se o usuário autenticado pode ou não remover o pagamento */
      canBeDeleted: boolean;
    };
    PaymentSummary: {
      id: number;
      grandTotalAmount: number;
      accountingPeriod: components["schemas"]["Period"];
      payee: components["schemas"]["UserMinimal"];
      approvedAt: string;
      scheduledTo: string;
      /** Se o usuário autenticado pode ou não aprovar o pagamento */
      canBeApproved: boolean;
      /** Se o usuário autenticado pode ou não remover o pagamento */
      canBeDeleted: boolean;
    };
    PaymentsPaginated: components["schemas"]["Page"] & {
      content?: components["schemas"]["PaymentSummary"][];
    };
    CashFlowCategoryDetailed: {
      id: number;
      name: string;
      updatedAt: string;
      updatedBy: components["schemas"]["UserMinimal"];
      type: components["schemas"]["CashFlowEntryType"];
      createdAt: string;
      createdBy: components["schemas"]["UserMinimal"];
      totalEntries: number;
      canBeDeleted: boolean;
    };
    CashFlowCategorySummary: {
      id: number;
      name: string;
      type: components["schemas"]["CashFlowEntryType"];
      totalEntries: number;
      canBeDeleted: boolean;
    };
    CashFlowCategoryMinimal: {
      id: number;
      name: string;
      type: components["schemas"]["CashFlowEntryType"];
    };
    CashFlowCategoryInput: {
      name: string;
      type: components["schemas"]["CashFlowEntryType"];
    };
    CashFlowCategoryIdInput: {
      id: number;
    };
    CashFlowEntryType: "REVENUE" | "EXPENSE";
    CashFlowEntrySummary: {
      id: number;
      type: components["schemas"]["CashFlowEntryType"];
      transactedOn: string;
      amount: number;
      category: components["schemas"]["CashFlowCategoryMinimal"];
      description: string;
      systemGenerated: boolean;
      canBeDeleted: boolean;
      canBeEdited: boolean;
    };
    CashFlowEntryDetailed: {
      id: number;
      type: components["schemas"]["CashFlowEntryType"];
      transactedOn: string;
      amount: number;
      category: components["schemas"]["CashFlowCategoryMinimal"];
      description: string;
      systemGenerated: boolean;
      createdBy: components["schemas"]["UserMinimal"];
      createdAt: string;
      updatedAt: string;
      updatedBy: components["schemas"]["UserMinimal"];
      canBeDeleted: boolean;
      canBeEdited: boolean;
    };
    CashFlowEntryInput: {
      type: components["schemas"]["CashFlowEntryType"];
      transactedOn: string;
      amount: number;
      category: components["schemas"]["CashFlowCategoryIdInput"];
      description: string;
    };
    MonthlyRevenuesExpensesChartjs: {
      datasets: {
        label: "Receita" | "Despesa";
        data: number[];
      }[];
      labels?: string[];
    };
    MonthlyRevenuesExpenses: {
      yearMonth: string;
      totalRevenues: number;
      totalExpenses: number;
    }[];
    EditorMonthlyEarnings: {
      yearMonth: string;
      totalAmount: number;
      totalPlatformAverageAmount: number;
    }[];
    EditorTagRatio: {
      tagName: string;
      percentage: number;
    }[];
    ImageUrls: {
      default: string;
      small: string;
      medium: string;
      large: string;
    };
    Bonus: {
      title: string;
      amount: number;
    };
    Location: {
      country: string;
      state: string;
      city: string;
    };
    Skill: {
      name: string;
      percentage: number;
    };
    BankAccount: {
      bankCode: string;
      agency: string;
      number: string;
      digit: string;
      /**
       * Tipos de contas:
       *  * `SAVING` - Conta poupança
       *  * `CHECKING` - Conta corrente
       */
      type: "SAVING" | "CHECKING";
    };
    /**
     * Tipos de perfis:
     *   * `EDITOR` - Editor de conteúdo
     *   * `ASSISTANT` - Auxiliar de recursos humanos e administração
     *   * `MANAGER` - Gerente da plataforma
     */
    Role: "EDITOR" | "ASSISTANT" | "MANAGER";
    PostEarnings: {
      pricePerWord: number;
      words: number;
      totalAmount: number;
    };
    PaymentEarnings: {
      words: number;
      totalAmount: number;
    };
    Period: {
      startsOn: string;
      endsOn: string;
    };
    UploadRequestInput: {
      fileName: string;
      contentLength: number;
    };
    UploadRequest: {
      uploadSignedUrl: string;
    };
    Page: {
      page: number;
      size: number;
      totalPages: number;
      totalElements: number;
    } & {
      content: unknown;
    };
    ProblemObject: {
      name?: string;
      userMessage: string;
    } & {
      type: unknown;
    };
    /** Representa um problema na comunicação com a API. Este modelo de representação é baseado na RFC 7807 (Problem Details for HTTP APIs) */
    Problem: {
      status: number;
      timestamp: string;
      type: string;
      title: string;
      detail: string;
      /** Lista de objetos ou campos que geraram o erro (opcional) */
      objects?: components["schemas"]["ProblemObject"][];
    };
  };
  responses: {
    /** Recurso não encontrado */
    NotFound: {
      content: {
        "application/json": components["schemas"]["Problem"];
      };
    };
    /** Requisição inválida */
    BadRequest: {
      content: {
        "application/json": components["schemas"]["Problem"];
      };
    };
  };
  parameters: {
    /** Número da página para a consulta */
    pageNumber: number;
    /** Quantidade de itens por página */
    pageSize: number;
    /** Nome da propriedade para ordenação */
    pageSort: string[];
  };
}

export interface operations {
  /** Se a requisição for autenticada para um editor, só poderá ter acesso ao recurso do próprio usuário. <br>Caso a requisição for autenticada para um gerente ou assistente, poderá ter acesso a qualquer recurso de usuário. */
  getUserById: {
    parameters: {
      path: {
        userId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["UserDetailed"];
        };
      };
      404: components["responses"]["NotFound"];
    };
  };
  /** Apenas requisições autenticadas para gerentes ou assistentes são válidas. <br>Assistentes não podem atualizar informações sensíveis de usuários com perfis de nível de acesso maior que os seus. */
  updateUser: {
    parameters: {
      path: {
        userId: number;
      };
    };
    responses: {
      /** Usuário atualizado */
      200: {
        content: {
          "application/json": components["schemas"]["UserDetailed"];
        };
      };
      400: components["responses"]["BadRequest"];
      404: components["responses"]["NotFound"];
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserInput"];
      };
    };
  };
  /** Apenas requisições autenticadas para gerentes ou assistentes são válidas. */
  getUsers: {
    parameters: {
      query: {
        /** Termo para consulta nas propriedades de nome, e-mail e CPF */
        term?: string;
        /** Nome do usuário */
        name?: string;
        /** E-mail do usuário */
        email?: string;
        /** Nome da propriedade para ordenação */
        sort?: components["parameters"]["pageSort"];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["UserSummary"][];
        };
      };
    };
  };
  /** Apenas requisições autenticadas para gerentes ou assistentes são válidas. <br>Assistentes não podem criar usuários com perfis de nível de acesso maior que os seus. */
  createUser: {
    responses: {
      /** Usuário criado */
      201: {
        content: {
          "application/json": components["schemas"]["UserDetailed"];
        };
      };
      400: components["responses"]["BadRequest"];
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserInput"];
      };
    };
  };
  /** Apenas requisições autenticadas para gerentes ou assistentes são válidas. <br>Assistentes não podem ativar usuários com perfis de nível de acesso maior que os seus. */
  activateUser: {
    parameters: {
      path: {
        userId: number;
      };
    };
    responses: {
      /** Usuário ativado */
      204: never;
      404: components["responses"]["NotFound"];
    };
  };
  /** Apenas requisições autenticadas para gerentes ou assistentes são válidas. <br>Assistentes não podem desativar usuários com perfis de nível de acesso maior que os seus. */
  deactivateUser: {
    parameters: {
      path: {
        userId: number;
      };
    };
    responses: {
      /** Usuário desativado */
      204: never;
      404: components["responses"]["NotFound"];
    };
  };
  getEditorById: {
    parameters: {
      path: {
        editorId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["EditorDetailed"];
        };
      };
      404: components["responses"]["NotFound"];
    };
  };
  getEditors: {
    parameters: {
      query: {
        /** Nome da propriedade para ordenação */
        sort?: components["parameters"]["pageSort"];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["EditorSummary"][];
        };
      };
    };
  };
  getPosts: {
    parameters: {
      query: {
        /** ID do editor (usuário) do post */
        editorId?: number;
        /** Número da página para a consulta */
        page?: components["parameters"]["pageNumber"];
        /** Quantidade de itens por página */
        size?: components["parameters"]["pageSize"];
        /** Nome da propriedade para ordenação */
        sort?: components["parameters"]["pageSort"];
        /** Inclui todos os posts no resultado da consulta (incluindo os despublicados) */
        showAll?: boolean;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["PostsPaginated"];
        };
      };
    };
  };
  createPost: {
    responses: {
      /** Post criado */
      201: {
        content: {
          "application/json": components["schemas"]["PostDetailed"];
        };
      };
      400: components["responses"]["BadRequest"];
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PostInput"];
      };
    };
  };
  getPostById: {
    parameters: {
      path: {
        postId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["PostDetailed"];
        };
      };
    };
  };
  updatePost: {
    parameters: {
      path: {
        postId: number;
      };
    };
    responses: {
      /** Post alterado */
      200: {
        content: {
          "application/json": components["schemas"]["PostDetailed"];
        };
      };
      400: components["responses"]["BadRequest"];
      404: components["responses"]["NotFound"];
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PostInput"];
      };
    };
  };
  deletePost: {
    parameters: {
      path: {
        postId: number;
      };
    };
    responses: {
      /** Post excluído */
      204: never;
      404: components["responses"]["NotFound"];
    };
  };
  publishPost: {
    parameters: {
      path: {
        postId: number;
      };
    };
    responses: {
      /** Post publicado */
      204: never;
      404: components["responses"]["NotFound"];
    };
  };
  unpublishPost: {
    parameters: {
      path: {
        postId: number;
      };
    };
    responses: {
      /** Post despublicado */
      204: never;
      404: components["responses"]["NotFound"];
    };
  };
  getPayments: {
    parameters: {
      query: {
        /** ID do beneficiário (usuário) do pagamento */
        payeeId?: number;
        /** E-mail do beneficiário (usuário) do pagamento */
        payeeEmail?: string;
        /** Mês/ano do agendamento */
        scheduledToYearMonth?: string;
        /** Número da página para a consulta */
        page?: components["parameters"]["pageNumber"];
        /** Quantidade de itens por página */
        size?: components["parameters"]["pageSize"];
        /** Nome da propriedade para ordenação */
        sort?: components["parameters"]["pageSort"];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["PaymentsPaginated"];
        };
      };
    };
  };
  createPayment: {
    responses: {
      /** Pagamento criado */
      201: {
        content: {
          "application/json": components["schemas"]["PaymentDetailed"];
        };
      };
      400: components["responses"]["BadRequest"];
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PaymentInput"];
      };
    };
  };
  approveBulkPayments: {
    responses: {
      /** Pagamentos aprovados */
      204: never;
      400: components["responses"]["BadRequest"];
    };
    requestBody: {
      content: {
        "application/json": number[];
      };
    };
  };
  /** Uma simulação de pagamento não é persistida no sistema */
  createPaymentPreview: {
    responses: {
      /** Simulação de pagamento criada */
      201: {
        content: {
          "application/json": components["schemas"]["PaymentPreview"];
        };
      };
      400: components["responses"]["BadRequest"];
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PaymentPreviewInput"];
      };
    };
  };
  approvePayment: {
    parameters: {
      path: {
        /** ID do pagamento */
        paymentId: number;
      };
    };
    responses: {
      /** Pagamento aprovado */
      204: never;
      400: components["responses"]["BadRequest"];
      404: components["responses"]["NotFound"];
    };
  };
  getPayment: {
    parameters: {
      path: {
        /** ID do pagamento */
        paymentId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["PaymentDetailed"];
        };
      };
      404: components["responses"]["NotFound"];
    };
  };
  /** Exclui fisicamente um pagamento. Caso o pagamento já tenha sido aprovado, não será possível excluí-lo. */
  deletePayment: {
    parameters: {
      path: {
        /** ID do pagamento */
        paymentId: number;
      };
    };
    responses: {
      /** Pagamento excluído */
      204: never;
      404: components["responses"]["NotFound"];
    };
  };
  getPostsByPayment: {
    parameters: {
      path: {
        paymentId: number;
      };
      query: {
        /** Nome da propriedade para ordenação */
        sort?: components["parameters"]["pageSort"];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["PostWithEarnings"][];
        };
      };
    };
  };
  getCashFlowEntry: {
    parameters: {
      path: {
        /** ID do lançamento financeiro */
        entryId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["CashFlowEntryDetailed"];
        };
      };
      404: components["responses"]["NotFound"];
    };
  };
  /** Não é permitido atualizar um lançamento financeiro gerado pelo sistema. */
  updateCashFlowEntry: {
    parameters: {
      path: {
        /** ID do lançamento financeiro */
        entryId: number;
      };
    };
    responses: {
      /** Lançamento financeiro atualizado */
      200: {
        content: {
          "application/json": components["schemas"]["CashFlowEntryDetailed"];
        };
      };
      400: components["responses"]["BadRequest"];
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CashFlowEntryInput"];
      };
    };
  };
  /** Exclui fisicamente um lançamento financeiro. Caso o lançamento informado tenha sido gerado pelo sistema, não será possível excluí-lo. */
  deleteCashFlowEntry: {
    parameters: {
      path: {
        /** ID do lançamento financeiro */
        entryId: number;
      };
    };
    responses: {
      /** Lançamento financeiro excluído */
      204: never;
      400: components["responses"]["BadRequest"];
      404: components["responses"]["NotFound"];
    };
  };
  getCashFlowEntries: {
    parameters: {
      query: {
        /** Tipo do lançamento financeiro */
        type: components["schemas"]["CashFlowEntryType"];
        /** Mês/ano dos lançamentos financeiros */
        yearMonth: string;
        /** Nome da propriedade para ordenação */
        sort?: components["parameters"]["pageSort"];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["CashFlowEntrySummary"][];
        };
      };
    };
  };
  createCashFlowEntry: {
    responses: {
      /** Lançamento financeiro criado */
      201: {
        content: {
          "application/json": components["schemas"]["CashFlowEntryDetailed"];
        };
      };
      400: components["responses"]["BadRequest"];
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CashFlowEntryInput"];
      };
    };
  };
  deleteBulkCashFlowEntries: {
    responses: {
      /** Lançamentos financeiros excluídos */
      204: never;
      400: components["responses"]["BadRequest"];
    };
    requestBody: {
      content: {
        "application/json": number[];
      };
    };
  };
  getCashFlowCategory: {
    parameters: {
      path: {
        /** ID da categoria */
        categoryId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["CashFlowCategoryDetailed"];
        };
      };
      404: components["responses"]["NotFound"];
    };
  };
  updateCashFlowCategory: {
    parameters: {
      path: {
        /** ID da categoria */
        categoryId: number;
      };
    };
    responses: {
      /** Categoria atualizada */
      200: {
        content: {
          "application/json": components["schemas"]["CashFlowCategoryDetailed"];
        };
      };
      400: components["responses"]["BadRequest"];
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CashFlowCategoryInput"];
      };
    };
  };
  /** Exclui fisicamente uma categoria. Caso a categoria possua lançamentos vinculados, não será possível excluí-la. */
  deleteCashFlowCategory: {
    parameters: {
      path: {
        /** ID da categoria */
        categoryId: number;
      };
    };
    responses: {
      /** Categoria excluída */
      204: never;
      400: components["responses"]["BadRequest"];
      404: components["responses"]["NotFound"];
    };
  };
  getCashFlowCategories: {
    parameters: {
      query: {
        /** Nome da propriedade para ordenação */
        sort?: components["parameters"]["pageSort"];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["CashFlowCategorySummary"][];
        };
      };
    };
  };
  createCashFlowCategory: {
    responses: {
      /** Categoria criada */
      201: {
        content: {
          "application/json": components["schemas"]["CashFlowCategoryDetailed"];
        };
      };
      400: components["responses"]["BadRequest"];
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CashFlowCategoryInput"];
      };
    };
  };
  createUploadRequest: {
    responses: {
      /** Solicitação de upload de arquivo criada */
      200: {
        content: {
          "application/json": components["schemas"]["UploadRequest"];
        };
      };
      400: components["responses"]["BadRequest"];
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UploadRequestInput"];
      };
    };
  };
}

export interface external {}
