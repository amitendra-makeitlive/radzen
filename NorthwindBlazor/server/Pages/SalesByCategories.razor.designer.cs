﻿using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.JSInterop;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Radzen;
using Radzen.Blazor;
using NorthwindBlazor.Models.Northwind;
using Microsoft.EntityFrameworkCore;

namespace NorthwindBlazor.Pages
{
    public partial class SalesByCategoriesComponent : ComponentBase
    {
        [Parameter(CaptureUnmatchedValues = true)]
        public IReadOnlyDictionary<string, dynamic> Attributes { get; set; }

        [Inject]
        protected IJSRuntime JSRuntime { get; set; }

        [Inject]
        protected NavigationManager UriHelper { get; set; }

        [Inject]
        protected DialogService DialogService { get; set; }

        [Inject]
        protected NotificationService NotificationService { get; set; }

        [Inject]
        protected NorthwindService Northwind { get; set; }

        protected RadzenGrid<NorthwindBlazor.Models.Northwind.SalesByCategory> grid0;

        IEnumerable<NorthwindBlazor.Models.Northwind.SalesByCategory> _getSalesByCategoriesResult;
        protected IEnumerable<NorthwindBlazor.Models.Northwind.SalesByCategory> getSalesByCategoriesResult
        {
            get
            {
                return _getSalesByCategoriesResult;
            }
            set
            {
                if(!object.Equals(_getSalesByCategoriesResult, value))
                {
                    _getSalesByCategoriesResult = value;
                    InvokeAsync(() => { StateHasChanged(); });
                }
            }
        }

        protected override async System.Threading.Tasks.Task OnInitializedAsync()
        {
            await Load();
        }
        protected async System.Threading.Tasks.Task Load()
        {
            var northwindGetSalesByCategoriesResult = await Northwind.GetSalesByCategories();
            getSalesByCategoriesResult = northwindGetSalesByCategoriesResult;
        }
    }
}
