# API terminology and naming

This API uses a historical namespace that originates from Roo's first use case — fleet management.

In v1, most operational endpoints are grouped under the /fleets/... path.
Functionally, these endpoints manage assets and their operational lifecycle, not vehicles only.

## Key terminology mapping (v1)

| Product concept      | v1 API naming / location        | Notes                                                                                                                                           |
|----------------------|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Organization (company/tenant) | Provisioned outside public API   | All API operations are executed within an existing organization context.                                                                        |
| Fleet                | `fleets`                         | Historical term. Represents a collection of assets within an organization (an asset pool; effectively the fleet the organization manages).      |
| Asset                | `Vehicle` / `car`                | In v1, assets are represented as vehicles under `/fleets/...`.                                                                                  |
| Vehicle              | `cars`, `car/{id}`               | API naming for asset instances in v1.                                                                                                           |
| Asset type           | Asset Types API                  | Defines the category of an asset (car, truck, equipment).                                                                                       |
| Asset status         | Asset Status API                 | Defines the current state of an asset.                                                                                                          |
| Inspection           | Inspections API                  | Defines inspection checklists and inspection runs for asset condition.                                                                          |
| Issue                | Issues API                       | Issues can originate from inspections (or be created manually), but they are managed in the Issues API as a separate issue‑management category. |
| Work order           | Work Orders API                  | Work orders are created to resolve issues or perform planned work.                                                                              |
| Custom attributes    | Custom Attributes API            | Extensible fields attached to most entities.                                                                                                    |
| Documents            | Documents API                    | Files attached to organizations (company-level), assets, users, groups, issues, or work orders.                                                 |
| Media                | Media Library API                | Photos and videos captured during inspections (used as evidence or context).                                                                    |
| Alerts, reminders, tasks | A.R.T. / Alerts API          | Alert notifications, reminders, and task-based triggers.                                                                                        |
| Warehouse            | Warehouse API                    | Inventory and spare parts management (optional). Work orders can reference parts from a warehouse when Warehouse API is enabled.               |
| Purchase order       | Purchase Orders API              | Order parts from vendors to complete work orders and repair or service assets (often to close inspections).                                     |
| Vendor               | Vendors API                      | External suppliers and contractors (optional). Purchase orders are placed with vendors, and warehouses can be linked to vendors.               |
| Warranty             | Warranty API                     | Warranty coverage linked to assets (optional); warranty service is requested through claims in work orders.                                     |
| Claim                | Claims API                       | Warranty or compensation claims tied to work orders and asset service.                                                                          |
| Reports & logs       | Reports / Daily Logs API         | Inspection reports, daily logs, and analytical outputs, including insights (for example, Metabase reports).                                     |
