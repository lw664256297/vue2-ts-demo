import Vue from "vue";
import api from "@/api";
export default class Base extends Vue {
  protected readonly api = api;
}
