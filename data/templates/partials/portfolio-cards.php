<?php
/**
 * Grid de cards do portfólio.
 * Opcional: $portfolioHomeLimit (int) — exibe só os N primeiros na home.
 */
if (!isset($portfolioItems)) {
    require __DIR__ . '/../../data/portfolio-items.php';
}
$items = isset($portfolioHomeLimit) && $portfolioHomeLimit > 0
    ? array_slice($portfolioItems, 0, (int) $portfolioHomeLimit)
    : $portfolioItems;

foreach ($items as $item) :
    $href = htmlspecialchars($item['url'], ENT_QUOTES, 'UTF-8');
    $title = htmlspecialchars($item['title'], ENT_QUOTES, 'UTF-8');
    $summary = htmlspecialchars($item['summary'], ENT_QUOTES, 'UTF-8');
    $image = htmlspecialchars($item['image'], ENT_QUOTES, 'UTF-8');
    $tag = htmlspecialchars($item['tag'], ENT_QUOTES, 'UTF-8');
    $year = (int) $item['year'];
    $stack = htmlspecialchars($item['stack'], ENT_QUOTES, 'UTF-8');
    $stackIcon = htmlspecialchars($item['stack_icon'], ENT_QUOTES, 'UTF-8');
    $host = parse_url($item['url'], PHP_URL_HOST) ?: '';
    $displayUrl = $host ? 'www.' . preg_replace('#^www\.#', '', $host) : $href;
    ?>
    <article class="portfolio-card">
        <a href="<?php echo $href; ?>" class="portfolio-card-image-link" target="_blank" rel="noopener noreferrer">
            <img
                src="<?php echo $image; ?>"
                alt="Preview do projeto <?php echo $title; ?>"
                class="portfolio-card-image"
                width="640"
                height="360"
                loading="lazy"
                onerror="this.onerror=null;this.src='assets/images/portfolio/placeholder.svg'"
            >
        </a>
        <div class="portfolio-card-body">
            <div class="portfolio-card-meta">
                <span class="portfolio-card-tag"><?php echo $tag; ?></span>
                <span class="portfolio-card-year"><?php echo $year; ?></span>
                <span class="portfolio-card-stack" title="<?php echo $stack; ?>">
                    <img src="<?php echo $stackIcon; ?>" alt="" class="portfolio-card-stack-icon" width="20" height="20">
                    <span><?php echo $stack; ?></span>
                </span>
            </div>
            <h3 class="portfolio-card-title"><?php echo $title; ?></h3>
            <p class="portfolio-card-summary"><?php echo $summary; ?></p>
            <a href="<?php echo $href; ?>" class="portfolio-card-url" target="_blank" rel="noopener noreferrer"><?php echo htmlspecialchars($displayUrl, ENT_QUOTES, 'UTF-8'); ?></a>
        </div>
    </article>
<?php endforeach; ?>
