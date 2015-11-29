package com.yrg.ecokitchen;

import android.app.Fragment;
import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.content.Intent;
import android.content.res.Configuration;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.FrameLayout;
import android.widget.ListView;

import com.yrg.ecokitchen.fragments.ContentFragment;
import com.yrg.ecokitchen.fragments.EmptyFragment;

public class MyDonations extends AppCompatActivity {
    private ListView drawerList;
    private DrawerLayout drawerLayout;
    private ArrayAdapter<String> lists;
    private FrameLayout mainLayout;
    private ActionBarDrawerToggle drawlerToggle;
    private String activityTitle;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my_donations);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);

        drawerList = (ListView)findViewById(R.id.navList);
        mainLayout = (FrameLayout) findViewById(R.id.mainLayout);
        drawerLayout = (DrawerLayout)findViewById(R.id.drawer_layout);
        activityTitle = "EcoKitchen";

        String[] menu = { "My Donations", "About Us", "Contact" };
        lists = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, menu);
        drawerList.setAdapter(lists);

        drawerList.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                String item = parent.getAdapter().getItem(position).toString();
                updateFragment(item);
                drawerLayout.closeDrawer(drawerList);
            }
        });
        setupDrawer();


        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MyDonations.this, Donate.class));
            }
        });
    }

    private void setupDrawer() {
        drawlerToggle = new ActionBarDrawerToggle(this, drawerLayout, R.string.drawer_open, R.string.drawer_close) {
            public void onDrawerOpened(View drawerView) {
                super.onDrawerOpened(drawerView);
                invalidateOptionsMenu();
            }
            public void onDrawerClosed(View view) {
                super.onDrawerClosed(view);
                invalidateOptionsMenu();
            }
        };
        drawlerToggle.setDrawerIndicatorEnabled(true);
        drawerLayout.setDrawerListener(drawlerToggle);
    }

    public void updateFragment(String item) {
        FragmentManager fragmentManager = getFragmentManager();
        FragmentTransaction ft = fragmentManager.beginTransaction();
        Fragment frag = ContentFragment.newInstance(item);
        setTitle(item);
        ft.replace(R.id.mainLayout, frag);
        ft.commit();
    }


    @Override
    protected void onPostCreate(Bundle savedInstanceState) {
        super.onPostCreate(savedInstanceState);
        drawlerToggle.syncState();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        drawlerToggle.onConfigurationChanged(newConfig);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if (drawlerToggle.onOptionsItemSelected(item)) {
            return true;
        }
        return super.onOptionsItemSelected(item);
    }

}
