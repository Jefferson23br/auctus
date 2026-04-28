<?php
/**
 * Portfolio card grid (English copy).
 * Optional: $portfolioHomeLimit (int) — only first N items (e.g. on home).
 */
if (!isset($portfolioItems)) {
    require __DIR__ . '/../../data/portfolio-items-en.php';
}
$items = isset($portfolioHomeLimit) && $portfolioHomeLimit > 0
    ? array_slice($portfolioItems, 0, (int) $portfolioHomeLimit)
    : $portfolioItems;

foreach ($items as $item) :
    $rawUrl = isset($item['url']) ? trim((string) $item['url']) : '';
    $hasUrl = $rawUrl !== '' && $rawUrl !== '#';
    $href = $hasUrl ? htmlspecialchars($rawUrl, ENT_QUOTES, 'UTF-8') : '';

    $title = htmlspecialchars($item['title'], ENT_QUOTES, 'UTF-8');
    $summary = htmlspecialchars($item['summary'], ENT_QUOTES, 'UTF-8');
    $image = htmlspecialchars($item['image'], ENT_QUOTES, 'UTF-8');
    $tag = htmlspecialchars($item['tag'], ENT_QUOTES, 'UTF-8');
    $year = (int) $item['year'];

    if (!empty($item['stacks']) && is_array($item['stacks'])) {
        $stacks = $item['stacks'];
    } else {
        $stacks = [
            [
                'name' => $item['stack'] ?? '',
                'icon' => $item['stack_icon'] ?? '',
            ],
        ];
    }

    $host = $hasUrl ? (parse_url($rawUrl, PHP_URL_HOST) ?: '') : '';
    $displayUrl = ($hasUrl && $host)
        ? 'www.' . preg_replace('#^www\.#', '', $host)
        : '';
    $urlLabel = isset($item['url_label']) ? trim((string) $item['url_label']) : '';
    $displayLink = $urlLabel !== '' ? $urlLabel : $displayUrl;
    $secondaryRawUrl = isset($item['secondary_url']) ? trim((string) $item['secondary_url']) : '';
    $hasSecondaryUrl = $secondaryRawUrl !== '' && $secondaryRawUrl !== '#';
    $secondaryHref = $hasSecondaryUrl ? htmlspecialchars($secondaryRawUrl, ENT_QUOTES, 'UTF-8') : '';
    $secondaryUrlLabel = isset($item['secondary_url_label']) ? trim((string) $item['secondary_url_label']) : '';
    $noLinkNote = isset($item['no_link_note']) ? trim((string) $item['no_link_note']) : '';

    if ($hasSecondaryUrl) {
        $secondaryHost = parse_url($secondaryRawUrl, PHP_URL_HOST) ?: '';
        $secondaryDisplayUrl = $secondaryHost !== ''
            ? 'www.' . preg_replace('#^www\.#', '', $secondaryHost)
            : '';
        $secondaryDisplayLink = $secondaryUrlLabel !== '' ? $secondaryUrlLabel : $secondaryDisplayUrl;
    } else {
        $secondaryDisplayLink = '';
    }

    $onErrorJs = 'this.onerror=null;this.src=' . json_encode('assets/images/portfolio/placeholder.svg', JSON_UNESCAPED_SLASHES) . ';';
    ?>
    <article class="portfolio-card">
        <?php if ($hasUrl) : ?>
        <a href="<?php echo $href; ?>" class="portfolio-card-image-link" target="_blank" rel="noopener noreferrer">
            <img
                src="<?php echo $image; ?>"
                alt="Project preview: <?php echo $title; ?>"
                class="portfolio-card-image"
                width="640"
                height="360"
                loading="lazy"
                decoding="async"
                onerror="<?php echo htmlspecialchars($onErrorJs, ENT_QUOTES, 'UTF-8'); ?>"
            >
        </a>
        <?php else : ?>
        <div class="portfolio-card-image-link portfolio-card-image-link--static">
            <img
                src="<?php echo $image; ?>"
                alt="Project preview: <?php echo $title; ?>"
                class="portfolio-card-image"
                width="640"
                height="360"
                loading="lazy"
                decoding="async"
                onerror="<?php echo htmlspecialchars($onErrorJs, ENT_QUOTES, 'UTF-8'); ?>"
            >
        </div>
        <?php endif; ?>
        <div class="portfolio-card-body">
            <div class="portfolio-card-meta">
                <span class="portfolio-card-tag"><?php echo $tag; ?></span>
                <span class="portfolio-card-year"><?php echo $year; ?></span>
            </div>
            <div class="portfolio-card-stacks">
                <?php foreach ($stacks as $s) :
                    $sName = htmlspecialchars($s['name'] ?? '', ENT_QUOTES, 'UTF-8');
                    $sIcon = htmlspecialchars($s['icon'] ?? '', ENT_QUOTES, 'UTF-8');
                    if ($sName === '') {
                        continue;
                    }
                    ?>
                <span class="portfolio-card-stack" title="<?php echo $sName; ?>">
                    <?php if ($sIcon !== '') : ?>
                    <img src="<?php echo $sIcon; ?>" alt="" class="portfolio-card-stack-icon" width="20" height="20">
                    <?php endif; ?>
                    <span><?php echo $sName; ?></span>
                </span>
                <?php endforeach; ?>
            </div>
            <h3 class="portfolio-card-title"><?php echo $title; ?></h3>
            <p class="portfolio-card-summary"><?php echo $summary; ?></p>
            <?php if ($hasUrl) : ?>
            <a href="<?php echo $href; ?>" class="portfolio-card-url" target="_blank" rel="noopener noreferrer"><?php echo htmlspecialchars($displayLink, ENT_QUOTES, 'UTF-8'); ?></a>
            <?php if ($hasSecondaryUrl) : ?>
            <a href="<?php echo $secondaryHref; ?>" class="portfolio-card-url" target="_blank" rel="noopener noreferrer"><?php echo htmlspecialchars($secondaryDisplayLink, ENT_QUOTES, 'UTF-8'); ?></a>
            <?php endif; ?>
            <?php else : ?>
            <?php if ($noLinkNote !== '') : ?>
            <p class="portfolio-card-no-link"><?php echo htmlspecialchars($noLinkNote, ENT_QUOTES, 'UTF-8'); ?></p>
            <?php else : ?>
            <p class="portfolio-card-soon">In development</p>
            <?php endif; ?>
            <?php endif; ?>
        </div>
    </article>
<?php endforeach; ?>
