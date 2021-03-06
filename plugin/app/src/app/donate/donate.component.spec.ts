import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DonateComponent } from "./donate.component";
import { SharedModule } from "../shared/shared.module";
import { CoreModule } from "../core/core.module";

describe("DonateComponent", () => {
	let component: DonateComponent;
	let fixture: ComponentFixture<DonateComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				CoreModule,
				SharedModule,
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DonateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
