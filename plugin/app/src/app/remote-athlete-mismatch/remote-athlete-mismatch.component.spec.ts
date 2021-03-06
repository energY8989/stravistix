import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RemoteAthleteMismatchComponent } from "./remote-athlete-mismatch.component";
import { SharedModule } from "../shared/shared.module";
import { CoreModule } from "../core/core.module";
import { AthleteHistoryService } from "../shared/services/athlete-history/athlete-history.service";
import { Subject } from "rxjs/Subject";

describe("RemoteAthleteMismatchComponent", () => {
	let component: RemoteAthleteMismatchComponent;
	let fixture: ComponentFixture<RemoteAthleteMismatchComponent>;
	let athleteHistoryService: AthleteHistoryService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RemoteAthleteMismatchComponent],
			imports: [
				CoreModule,
				SharedModule,
			]
		}).compileComponents();

		athleteHistoryService = TestBed.get(AthleteHistoryService);

		spyOn(athleteHistoryService, "localRemoteAthleteProfileSame").and.returnValue(new Subject<boolean>());

	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RemoteAthleteMismatchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
