import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Header() {
    return (
        <header class="w-full bg-black">
            <div class="px-8 py-5 w-full max-w-7xl mx-auto flex justify-between items-center">
                <div class="text-4xl font-black text-white font-Roboto">INSIGHTS</div>
                <div class="text-4xl text-white">
                    <span class="material-symbols-outlined">menu</span>
                </div>
            </div>
        </header>
    )
}