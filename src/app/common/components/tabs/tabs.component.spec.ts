import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabsComponent} from './tabs.component';
import {HarnessLoader} from "@angular/cdk/testing";
import {MatTabsModule} from "@angular/material/tabs";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {TestbedHarnessEnvironment} from "@angular/cdk/testing/testbed";
import {MatTabGroupHarness} from "@angular/material/tabs/testing";

describe('TabsComponent', () => {
  let fixture: ComponentFixture<TabsComponent>;
  let loader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatTabsModule, NoopAnimationsModule],
      declarations: [TabsComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TabsComponent);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should load harness for tab-group', async () => {
    const tabGroups = await loader.getAllHarnesses(MatTabGroupHarness);
    expect(tabGroups.length).toBe(1);
  });

  it('should load harness for tab-group with selected tab label', async () => {
    const tabGroups = await loader.getAllHarnesses(
      MatTabGroupHarness.with({
        selectedTabLabel: 'Accueil',
      }),
    );
    expect(tabGroups.length).toBe(1);
  });

  it('should be able to get all tabs of tab-group', async () => {
    const tabGroup = await loader.getHarness(MatTabGroupHarness);
    const tabs = await tabGroup.getTabs();
    expect(tabs.length).toBe(4);
  });

  it('should be able to select tab from tab-group', async () => {
    const tabGroup = await loader.getHarness(MatTabGroupHarness);
    expect(await (await tabGroup.getSelectedTab()).getLabel()).toBe('Accueil');
    await tabGroup.selectTab({label: 'Biens'});
    expect(await (await tabGroup.getSelectedTab()).getLabel()).toBe('Biens');
  });
});
