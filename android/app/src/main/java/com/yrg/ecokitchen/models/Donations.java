package com.yrg.ecokitchen.models;

public class Donations {
    private String id, institution;
    private String[] slot, category;
    private int amount, date;
    private boolean present;

    public Donations(String a, String b, int c, String[] d, String[] e, int f, int g) {
        this.id = a;
        this.institution = b;
        this.date = c;
        this.slot = d;
        this.category = e;
        this.amount = f;
        this.present = (g == 1) ? true : false;
    }

    public boolean isPresent() {
        return present;
    }

    public int getAmount() {
        return amount;
    }

    public int getDate() {
        return date;
    }

    public String getId() {
        return id;
    }

    public String getInstitution() {
        return institution;
    }

    public String[] getCategory() {
        return category;
    }

    public String[] getSlot() {
        return slot;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public void setCategory(String[] category) {
        this.category = category;
    }

    public void setDate(int date) {
        this.date = date;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setInstitution(String institution) {
        this.institution = institution;
    }

    public void setPresent(boolean present) {
        this.present = present;
    }

    public void setSlot(String[] slot) {
        this.slot = slot;
    }
}
