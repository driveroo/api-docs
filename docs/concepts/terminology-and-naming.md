# API terminology and naming

This API uses a historical namespace that originates from Roo's first use case — fleet management.

In v1, most operational endpoints are grouped under the /fleets/... path.
Functionally, these endpoints manage assets and their operational lifecycle, not vehicles only.

## Key terminology mapping (v1)

| Product concept      | v1 API naming / location        | Notes                                                                 |
|----------------------|----------------------------------|-----------------------------------------------------------------------|
| Company (tenant)     | Provisioned outside public API   | All API operations are executed within an existing company context.   |
| Fleet                | `fleets`                         | Historical term. Represents a collection of assets (asset pool).      |
| Asset                | `Vehicle` / `car`                | In v1, assets are represented as vehicles under `/fleets/...`.        |
| Vehicle              | `cars`, `car/{id}`               | API naming for asset instances in v1.                                 |
| Asset type           | Asset Types API                  | Defines the category of an asset (car, truck, equipment).             |
| Asset status         | Asset Status API                 | Defines the current state of an asset.                                 |
| Inspection           | Inspections API                  | Used to inspect asset condition via templates and checklists.          |
| Issue                | Issues API                       | A problem or defect detected manually or during an inspection.        |
| Work order           | Work Orders API                  | A task created to resolve an issue or perform planned work.            |
| Custom attributes    | Custom Attributes API            | Extensible fields attached to most entities.                           |
| Documents            | Documents API                    | Files attached to assets, users, groups, issues, or work orders.      |
| Media                | Media Library API                | Photos and videos used as evidence or context.                         |
| Alerts & reminders   | A.R.T. / Alerts API              | Notifications, reminders, and rule-based triggers.                    |
| Warehouse            | Warehouse API                    | Inventory and spare parts management.                                  |
| Purchase order       | Purchase Orders API              | Ordering and replenishment of parts from vendors.                     |
| Vendor               | Vendors API                      | External suppliers and contractors.                                    |
| Warranty             | Warranty API                     | Warranty coverage linked to assets or work orders.                     |
| Claim                | Claims API                       | Compensation or warranty claims related to work performed.             |
| Reports & logs       | Reports / Daily Logs API         | Inspection reports, daily logs, and analytical outputs.                |
