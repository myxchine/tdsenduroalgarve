CREATE TABLE IF NOT EXISTS "tds_mailList" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tds_rentals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"surname" text NOT NULL,
	"email" text NOT NULL,
	"message" text NOT NULL,
	"bike" text NOT NULL,
	"days" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tds_reservations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"surname" text NOT NULL,
	"email" text NOT NULL,
	"message" text NOT NULL,
	"riders" integer NOT NULL
);
