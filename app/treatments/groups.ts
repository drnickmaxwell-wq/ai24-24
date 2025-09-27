// Re-export the real data from the root 'treatments' folder.
// (Using relative path so we don't resolve back to app/.)
export { default } from '../../treatments/groups';
export * from '../../treatments/groups';
