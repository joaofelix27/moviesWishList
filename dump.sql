PGDMP         #            
    z            wishlist     14.4 (Ubuntu 14.4-1.pgdg20.04+1)     14.4 (Ubuntu 14.4-1.pgdg20.04+1)                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    143522    wishlist    DATABASE     ]   CREATE DATABASE wishlist WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE wishlist;
                postgres    false            ;           1247    143541 
   statusType    TYPE     J   CREATE TYPE public."statusType" AS ENUM (
    'Watched',
    'toWatch'
);
    DROP TYPE public."statusType";
       public          postgres    false            ?            1259    143525    _prisma_migrations    TABLE     ?  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            ?            1259    143546    movies    TABLE     ?   CREATE TABLE public.movies (
    id integer NOT NULL,
    name text NOT NULL,
    plataform text NOT NULL,
    category text NOT NULL,
    status public."statusType" NOT NULL,
    score integer
);
    DROP TABLE public.movies;
       public         heap    postgres    false    827            ?            1259    143545    movies_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.movies_id_seq;
       public          postgres    false    211                       0    0    movies_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;
          public          postgres    false    210            m           2604    143549 	   movies id    DEFAULT     f   ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);
 8   ALTER TABLE public.movies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    210    211            ?          0    143525    _prisma_migrations 
   TABLE DATA           ?   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    209   ?                  0    143546    movies 
   TABLE DATA           N   COPY public.movies (id, name, plataform, category, status, score) FROM stdin;
    public          postgres    false    211   `                  0    0    movies_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.movies_id_seq', 7, true);
          public          postgres    false    210            o           2606    143533 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    209            r           2606    143553    movies movies_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.movies DROP CONSTRAINT movies_pkey;
       public            postgres    false    211            p           1259    143554    movies_name_key    INDEX     I   CREATE UNIQUE INDEX movies_name_key ON public.movies USING btree (name);
 #   DROP INDEX public.movies_name_key;
       public            postgres    false    211            ?   ?  x?u?mj?1?ۧ?d?K???^?Z)?88????????G?v?gF?!\??蜓??d:g??tL?vT?D???M!K??^t???t(
;AQ?U?vG͹??# J?	??#ё??&??ߧ?(hD[??v==?n???O?u?6???o?K!?PޅpO?ZJ???dK??E2?k%?Q?`)?ϚK?6j???dɓg!*?m-?O?
??ޅ??P?;a???^?????(r??<f&??-??E???Ҽ?h?|7|????^7#?# ?,h?y?/_??-b???Q^|??΅?c??G?L#%?6O?>Xz???????8?V????^?#??X?M?͓֕?f???G??a?&?k?iV?????U?,#Dؚ?)?mq"k????\?m?z???'??Vέ?????_???s{??Cb?b7???~??T??]          o   x?3??M??LK-.???K-I?ɬ?tL.????O,I?HM?4?2?+*GWT?V???e???_?????Z?P?_Z???_??Z?G?9?[Qfj^J1\MpfIr~.?jC?=... .?6O     