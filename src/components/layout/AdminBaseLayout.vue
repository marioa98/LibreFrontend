<template>
    <div>
        <slot name="navbar"></slot>
        <slot name="header"></slot>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-3 is-2-widescreen">
                        <slot name="menu"></slot>
                    </div>
                    <div class="column is-10">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>